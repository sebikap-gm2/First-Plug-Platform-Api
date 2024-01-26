import { ConnectOptions } from "mongoose";
import { connectToDatabase } from "../config";
import { AuthServices } from "./auth.services";
import { MembersServices } from "./member";
import { OrderServices } from "./orders.services";
import { ProductServices } from "./product.services";
import { ShipmentServices } from "./shipment.services";
import { TeamsServices } from "./teams.services";
import { UserService } from "./user.services";

const Services = {
  auth: AuthServices,
  member: MembersServices,
  order: OrderServices,
  user: UserService,
  product: ProductServices,
  team: TeamsServices,
  shipment: ShipmentServices,
} as const;
type ServiceName = keyof typeof Services;
type ServiceValue<N extends ServiceName> = (typeof Services)[N];

type ServiceMethodName<N extends ServiceName> = Exclude<
  keyof ServiceValue<N>,
  "prototype"
>;

type Aux<
  N extends ServiceName,
  M extends ServiceMethodName<N>
> = (typeof Services)[N][M];
type ServiceMethod<N extends ServiceName, M extends ServiceMethodName<N>> = Aux<
  N,
  M
> extends (...args: any) => any
  ? Aux<N, M>
  : never;

type ServiceMethodPayload<
  N extends ServiceName,
  M extends ServiceMethodName<N>
> = ServiceMethod<N, M> extends (args: infer A) => any ? A : never;

export class MainService {
  userId?: string;
  isInitialized = false;

  public async initalize(userId?: string) {
    await connectToDatabase("tenants");
    if (userId) {
      const user = await Services.user.getById(userId);

      if (user) {
        await connectToDatabase(user.tenantName);
      } else {
        throw new Error("User not found");
      }
    }
    this.isInitialized = true;
  }

  public async runCommand<
    N extends ServiceName,
    M extends ServiceMethodName<N>
  >(s: N, m: M, p: ServiceMethodPayload<N, M>) {
    if (!this.isInitialized) throw new Error("");
    const service = Services[s];
    const method = service[m] as ServiceMethod<N, M>;
    return method(p);
  }
}

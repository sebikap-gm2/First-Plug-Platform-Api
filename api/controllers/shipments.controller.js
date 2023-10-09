const ShipmentServices = require("../services/shipment.services");

class ShipmentsController {
  static async getShipments(req, res, next) {
    try {
      const allShipments = await ShipmentServices.getAllShipments();

      res.status(200).json(allShipments);
    } catch (error) {
      next(error);
    }
  }
  static async getOneShipment(req, res, next) {
    try {
      const allShipments = await ShipmentServices.getOneShipment(req.params.id);

      res.status(200).json(allShipments);
    } catch (error) {
      next(error);
    }
  }
  static async createShipment(req, res, next) {
    try {
      const newShipment = await ShipmentServices.createShipment(req.body);

      res.status(200).json({ newShipment });
    } catch (error) {
      next(error);
    }
  }
  static async updateShipment(req, res, next) {
    try {
      const newShipment = await ShipmentServices.updateShipment(
        req.params.id,
        req.body
      );

      res.status(200).json({ newShipment });
    } catch (error) {
      next(error);
    }
  }
  static async deleteShipment(req, res, next) {
    try {
      const newShipment = await ShipmentServices.deleteShipment(req.params.id);

      res.status(200).json({ newShipment });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ShipmentsController;

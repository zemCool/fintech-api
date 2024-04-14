const mongoose = require('mongoose');
const Request = require('../model/Request');

const uri = 'mongodb+srv://user:user@cluster0.3akoalx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

class RequestController {
  async addRequest(req, res) {
    try {
      const reqBody = req.body;
      const usernameId = req.user.id; 

      const newRequestData = {
        card_name: reqBody.card_name,
        request_owner_id: usernameId,
        money_count: reqBody.money_count,
        date_of_request: reqBody.date_of_request
      };

      const mongoClient = await mongoose.connect(uri);
      const session = await mongoClient.startSession();

      const transactionOptions = {
        readReference: 'primary',
        readConcern: { level: 'local' },
        writeConcern: { w: 'majority' }
      };

      try {
        await session.withTransaction(async () => {
          const newRequest = new Request(newRequestData);

          try {
            await newRequest.save({ session });
          } catch (err) {
            await session.abortTransaction();
            return res.status(400).json({ err: "Transaction aborted due to some error" });
          }

          await session.commitTransaction();

          return res.status(200).json({ message: 'Request successfully added' });
        }, transactionOptions);
      } catch (err) {
        return res.status(400).json({ error: 'Failed to add request' });
      } finally {
        await session.endSession();
        return;
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async deleteRequest(req, res) {
    try {
      const requestId = req.params.requestId;

      const deletedRequest = await Request.findByIdAndDelete(requestId);

      if (!deletedRequest) {
        return res.status(404).json({ message: 'Request not found' });
      }

      return res.status(200).json({ message: 'Request deleted successfully' });
    } catch (err) {
      return res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = new RequestController();

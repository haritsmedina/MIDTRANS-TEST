const baseURL = 'https://api.sandbox.midtrans.com'
const MerchantID = 'G704244226'
const serverKey = 'SB-Mid-server-OC-CpMu5lkZ2JT7mMyfnvDf0'
const clientKey = 'SB-Mid-client-kOg3pJdjMxNkUPCY'

const midtransClient = require('midtrans-client');

class Controller {

  static transaction( req,res) {

      let snap = new midtransClient.Snap({
              // Set to true if you want Production Environment (accept real transaction).
              isProduction : false,
              serverKey : serverKey
          });
       
      let parameter = {
          "transaction_details": {
              "order_id": "YOUR-ORDERID-123456",
              "gross_amount": 10000
          },
          "credit_card":{
              "secure" : true
          },
          "customer_details": {
              "first_name": "budi",
              "last_name": "pratama",
              "email": "budi.pra@example.com",
              "phone": "08111222333"
          }
      };
       
      const Token = snap.createTransaction(parameter)
      // return new Promise ((resolve,rejects) =>{

          .then((transaction)=>{
              // transaction token
              let transactionToken = transaction.token;
              console.log('transactionToken:',transactionToken);
              res.render('test',{data :transactionToken})
          })
          .catch( err => {
            console.log({error: err})
          })
          // console.log(Token, 'INITOKEN')

    }
  }


module.exports = Controller
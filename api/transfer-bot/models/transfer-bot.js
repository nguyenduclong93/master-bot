"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const pm2 = require("pm2");
const { reject } = require("pm2/lib/tools/promise.min");
module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      console.log("beforeCreate", data);
      const connection = await new Promise((resolve, reject) => {
        pm2.connect((err) => {
          if (err) reject(error);
          pm2.start(
            {
              script: `KEY=${data.privateKey} INFURA=${data.infura} NET=${data.network}  FROM=${data.addressFrom} TO=${data.addressTo} TOKEN=${data.addressToken} node bot/auto-transfer --name=${data.name}`,
              name: data.name,
              log_file: `public/logs/${data.name}`,
            },
            function (err, apps) {
              resolve(apps);
              if (err) reject(err);
            }
          );
        });
      });
      console.log(connection);
    },
    afterCreate(result) {},
  },
};

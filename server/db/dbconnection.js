import mongoose from "mongoose"

const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};

var db;
const connectdb = () => {

    if (!db) {
        var db = mongoose.createConnection('mongodb://127.0.0.1:27017/blog', options);

        db.then(
            () => {
                console.log("数据库打开成功")
            },
            (error) => {
                console.error(error)
            }
        );
    }

    return db;
}

export default connectdb;

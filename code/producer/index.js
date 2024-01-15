import express from "express";
import { producer } from "./config/kafka.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/v1/webhook/:connector/:connection", async (req, res, next) => {
    const { connector, connection } = req.params;

    const event = {
        connector_name: connector,
        connection_id: connection,
        event_data: req.body,
        received_time: new Date().toISOString()
    }

    // find the organization corresponding to the connection id
    const organization = connection;

    try {
        await producer.send({
            topic: organization,
            messages: [
                { key: connection, value: JSON.stringify(event) }
            ],
        });
    } catch (err) {
        return res.status(500).json({
            message: "error adding event to queue",
            data: event
        });
    }
    return res.status(200).json({
        message: "event added to queue",
        data: event
    });
});

app.listen(process.env.PORT, async () => {
    try {
        await producer.connect();
        console.log("🟢 producer connected");
    } catch (err) {
        console.log("🔴 producer connection failed", err);
    } finally {
        console.log("🟢 service running");
    }
});

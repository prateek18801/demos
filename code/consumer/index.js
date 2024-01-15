import { consumer, admin } from "./config/kafka.js";

// generic consumer subscribed to all topics
(async () => {
    await admin.connect();
    await consumer.connect();
    
    // get list of topics
    const topics = await admin.listTopics();
    // remove __consumer_offsets topic
    topics.splice(topics.indexOf("__consumer_offsets"), 1);
    console.log(topics);

    await consumer.subscribe({ topics: topics, fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                topic: topic,
                partition: partition,
                value: message.value.toString()
            });
        }
    });
})();

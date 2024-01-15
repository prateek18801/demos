import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "event-producer",
    brokers: [process.env.KAFKA_HOST]
});

const producer = kafka.producer();

const consumer = kafka.consumer({
    groupId: "event-consumer"
});

export { kafka, producer, consumer };

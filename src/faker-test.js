import { faker } from "@faker-js/faker";

export default function () {
  console.log(JSON.stringify(generateSubscriber()));
}

export const generateSubscriber = () => ({
  name: `SUBSCRIPTION_TEST - ${faker.name.firstName()} ${faker.name.lastName()}`,
});

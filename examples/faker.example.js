import * as faker from 'faker/locale/en_US'; 


export default function () {
  console.log(JSON.stringify(generateSubscriber()));
}


export const generateSubscriber = () => ({
    name: `SUBSCRIPTION_TEST - ${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.name.jobTitle(),
    company: faker.company.companyName(),
    email: faker.internet.email(),
    country: faker.address.country()
});
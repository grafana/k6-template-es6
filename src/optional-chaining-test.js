// https://github.com/grafana/k6/issues/2168
// added @babel/plugin-transform-optional-chaining to rollup config
export default function () {
  const person = {
    name: "Thomas",
    mother: {
      name: "Alice",
    },
  };

  // k6 does not support the optional chaining operator
  console.log(person.mother?.name);
}

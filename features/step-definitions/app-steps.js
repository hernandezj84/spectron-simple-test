const { Given, When, Then } = require("cucumber");
const expect = require("chai").expect;

Given(/^App has been opened$/, () => {
  return app.client.getWindowCount().then(count => {
    expect(count).to.be.equal(1);
  });
});

When(/^Title contains "([^"]*)"$/, text => {
  return app.client.getTitle().then(title => {
    expect(title).to.be.equal(text);
  });
});

// Then(/^Grab the button content$/, () => {
//   let val = "";
//   return app.client
//     .setValue("#bookType", "TEST")
//     .getValue("#bookType")
//     .click("#bookTypeButton")
//     .then(() => {
//       const element = app.client.element("#bookTypeSelect");
//       element
//         .selectByAttribute("value", "TEST")
//         .getValue("#bookTypeSelect")
//         .then(value => {
//           console.log("VALUE ", value);
//           expect(value).to.be.equal("CACHAPA");
//         });
//     });
// });

Then(/^Grab the button content$/, () => {
  const select = app.client.element("#bookTypeSelect");
  return app.client
    .setValue("#bookType", "TEST")
    .getValue("#bookType")
    .click("#bookTypeButton")
    .getText("#bookTypeSelect")
    .then(value => {
      let v = value.includes("TEST");
      expect(v).to.be.true;
    });
});

import { Selector } from "testcafe";
import XPathSelector from "./xpath-selector";

fixture`Getting Started`.page`https://sanbox.undostres.com.mx/`;

test("My first test", async (t) => {
  await t
    .typeText(XPathSelector("//*[@name='mobile']"), "8465433546")
    .click(XPathSelector("//*[@name='operator']"))
    .click(XPathSelector("//b[text()='Telcel']"))
    .click(
      XPathSelector(
        "//div[contains(text(), '$10 saldo +$2 de regalo y 500 MB gratis para redes. Vigencia saldo: 7 días. Vigencia redes: 5 días. T&C en Telcel.')]"
      )
    )
    .click(XPathSelector("(//button[text()='Siguiente'])[1]"))

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(
      Selector(XPathSelector("//div[text()='Resumen de la compra']")).innerText
    )
    .eql("Resumen de la compra");
});

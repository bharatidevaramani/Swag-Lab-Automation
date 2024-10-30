$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01SwagLabs_Login.feature");
formatter.feature({
  "line": 1,
  "name": "01 SwagLab application Login functionality",
  "description": "",
  "id": "01-swaglab-application-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "01_SwagLab application Login",
  "description": "",
  "id": "01-swaglab-application-login-functionality;01-swaglab-application-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "am on the SwagLab home page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#When I enter \"\u003cSwagUsername\u003e\""
    },
    {
      "line": 6,
      "value": "#|SwagUsername|"
    },
    {
      "line": 7,
      "value": "#|standard_user|"
    },
    {
      "line": 8,
      "value": "#|locked_out_user|"
    },
    {
      "line": 9,
      "value": "#|problem_user|"
    },
    {
      "line": 10,
      "value": "#|performance_glitch_user|"
    }
  ],
  "line": 11,
  "name": "I enter SwagUsername",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter SwagPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the SwagApp",
  "keyword": "Then "
});
formatter.match({
  "location": "SwgLab_LoginPage.am_on_the_SwagLab_home_page()"
});
formatter.result({
  "duration": 3033370996,
  "status": "passed"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_enter_username()"
});
formatter.result({
  "duration": 168474215,
  "status": "passed"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_enter_password()"
});
formatter.result({
  "duration": 56537274,
  "status": "passed"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_click_the_Login_button()"
});
formatter.result({
  "duration": 317738744,
  "status": "passed"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_verify_the_HomePage()"
});
formatter.result({
  "duration": 79101938,
  "status": "passed"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_close_the_application()"
});
formatter.result({
  "duration": 120673996,
  "status": "passed"
});
formatter.uri("02SwagLabs_AddOneProduct.feature");
formatter.feature({
  "line": 1,
  "name": "02 SwagLab add One product to cart and complete Order",
  "description": "",
  "id": "02-swaglab-add-one-product-to-cart-and-complete-order",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "02_SwagLabs Add one product",
  "description": "",
  "id": "02-swaglab-add-one-product-to-cart-and-complete-order;02-swaglabs-add-one-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Iam on the SwagLab home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am entering SwagUsername",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am entering SwagPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I clicked on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I have assert the HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click to addCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I have to click CheckOutCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to Button to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter LastName",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter PostCode",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click Finish button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify order successful",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I would close the SwagApp",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLab_AddOneProduct.am_on_the_SwagLab_home_page()"
});
formatter.result({
  "duration": 1751173811,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_username()"
});
formatter.result({
  "duration": 163903772,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_password()"
});
formatter.result({
  "duration": 52616724,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_the_Login_button()"
});
formatter.result({
  "duration": 321760590,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_verify_the_HomePage()"
});
formatter.result({
  "duration": 73660177,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_addToCart()"
});
formatter.result({
  "duration": 53337787,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_checkoutToCart()"
});
formatter.result({
  "duration": 84000032,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_test_checkout_swagLab_app()"
});
formatter.result({
  "duration": 91878352,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_firstname()"
});
formatter.result({
  "duration": 63909778,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_lastname()"
});
formatter.result({
  "duration": 43234595,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_postcode()"
});
formatter.result({
  "duration": 38540222,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_continue()"
});
formatter.result({
  "duration": 97684439,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_finish_button()"
});
formatter.result({
  "duration": 86369765,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_verify_order_success()"
});
formatter.result({
  "duration": 24513608,
  "status": "passed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_logout_swagLab_app()"
});
formatter.result({
  "duration": 149444584,
  "status": "passed"
});
formatter.uri("03SwagLabs_AddMultipleProduct.feature");
formatter.feature({
  "line": 1,
  "name": "03 SwagLab add multiple product to cart and complete Order",
  "description": "",
  "id": "03-swaglab-add-multiple-product-to-cart-and-complete-order",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "03_SwagLabs Add multiple product",
  "description": "",
  "id": "03-swaglab-add-multiple-product-to-cart-and-complete-order;03-swaglabs-add-multiple-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I access SwagLab home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered SwagUsername",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I entered SwagPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I press Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I asserted the HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I clicked to addToCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I clicked to addToCart SecondItem",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I clicked to CheckOutCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I clicked to CheckOutButton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I entered FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I entered LastName",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I entered PostCode",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I clicked continue button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I clicked Finish button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verified order successful",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I had close the SwagApp",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_am_on_the_SwagLab_home_page()"
});
formatter.result({
  "duration": 1713988748,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_username()"
});
formatter.result({
  "duration": 167747433,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_password()"
});
formatter.result({
  "duration": 55497371,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_press_the_Login_button()"
});
formatter.result({
  "duration": 298831541,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_asserted_the_HomePage()"
});
formatter.result({
  "duration": 75241347,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_submit_addToCart()"
});
formatter.result({
  "duration": 52029647,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_addToCart_secondOne()"
});
formatter.result({
  "duration": 44156077,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_checkoutToCart()"
});
formatter.result({
  "duration": 99339809,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_check_out_button()"
});
formatter.result({
  "duration": 75578857,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_firstname()"
});
formatter.result({
  "duration": 67367007,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_lastname()"
});
formatter.result({
  "duration": 40635177,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_postcode()"
});
formatter.result({
  "duration": 37567534,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_continue()"
});
formatter.result({
  "duration": 98495303,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_finish_button()"
});
formatter.result({
  "duration": 85510386,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_verified_order_success()"
});
formatter.result({
  "duration": 19718529,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_closed_application()"
});
formatter.result({
  "duration": 108847959,
  "status": "passed"
});
formatter.uri("04SwagLabs_RemoveProduct_BackToHomePage.feature");
formatter.feature({
  "line": 1,
  "name": "04 SwagLab: Remove product from cart and go back to HomePage",
  "description": "",
  "id": "04-swaglab:-remove-product-from-cart-and-go-back-to-homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "04_SwagLabs remove item from cart and back to Home page",
  "description": "",
  "id": "04-swaglab:-remove-product-from-cart-and-go-back-to-homepage;04-swaglabs-remove-item-from-cart-and-back-to-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Iam on the SwagLab homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter SwagLabUsername",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter SwagLabPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on SwagLogin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify SwagLab HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click addCartButton swagLab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click swag CheckOutCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click remove Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click ContinueShopping Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I check shopping page for SwagLab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I have click close the SwagApp",
  "keyword": "And "
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.am_on_the_SwagLab_homepage()"
});
formatter.result({
  "duration": 1746245733,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_enter_swag_username()"
});
formatter.result({
  "duration": 162453384,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_enter_swag_password()"
});
formatter.result({
  "duration": 52667746,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_on_swagLogin_button()"
});
formatter.result({
  "duration": 301285811,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_verifySwagLab_HomePage()"
});
formatter.result({
  "duration": 76156924,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_addToCart()"
});
formatter.result({
  "duration": 48821623,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_checkoutToCart()"
});
formatter.result({
  "duration": 78994780,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_removeToCart()"
});
formatter.result({
  "duration": 57120091,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_continues_hopping_button()"
});
formatter.result({
  "duration": 73028347,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_check_shopping_page()"
});
formatter.result({
  "duration": 137559257,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_close_swagLab_application()"
});
formatter.result({
  "duration": 138092022,
  "status": "passed"
});
formatter.uri("05SwagLabs_verify_CheckoutPage.feature");
formatter.feature({
  "line": 1,
  "name": "05 SwagLabs verify the checkout page",
  "description": "",
  "id": "05-swaglabs-verify-the-checkout-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "05_SwagLabs verify the checkout page",
  "description": "",
  "id": "05-swaglabs-verify-the-checkout-page;05-swaglabs-verify-the-checkout-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I land on SwagLab home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am submitting Username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am submitting Password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I submit click to Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I check the swag lab HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to add Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to CheckOutCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I navigating to CheckOutButton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add FirstName to the field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add LastName to the field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I add PostCode to the field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I navigating to continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I have verified the checkout information",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I logoff and close the SwagApp",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_land_on_the_SwagLab_home_page()"
});
formatter.result({
  "duration": 1809622838,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_submit_username()"
});
formatter.result({
  "duration": 164298397,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_submit_password()"
});
formatter.result({
  "duration": 51159651,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_submit_click_the_Login_button()"
});
formatter.result({
  "duration": 442255545,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_verify_the_HomePage()"
});
formatter.result({
  "duration": 71739568,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_navigate_to_addToCart()"
});
formatter.result({
  "duration": 47541745,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_navigate_checkoutToCart()"
});
formatter.result({
  "duration": 82157069,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_navigating_check_out_button()"
});
formatter.result({
  "duration": 78444500,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_add_firstname()"
});
formatter.result({
  "duration": 66483191,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_add_lastname()"
});
formatter.result({
  "duration": 39169818,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_add_postcode()"
});
formatter.result({
  "duration": 38268822,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_navigating_to_continue()"
});
formatter.result({
  "duration": 89160277,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_have_verified_the_checkout_info()"
});
formatter.result({
  "duration": 30050266,
  "status": "passed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_logoff_swagLab_app()"
});
formatter.result({
  "duration": 102065921,
  "status": "passed"
});
});
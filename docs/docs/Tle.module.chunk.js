webpackJsonp(["Tle.module"],{

/***/ "../../../../../src/app/pages/tle/Tle.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TleModule", function() { return TleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tle_routing_module__ = __webpack_require__("../../../../../src/app/pages/tle/tle-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TleModule = (function () {
    function TleModule() {
    }
    return TleModule;
}());
TleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_2__tle_routing_module__["a" /* TleRoutingModule */],
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_2__tle_routing_module__["b" /* routedComponents */].slice(),
    })
], TleModule);

//# sourceMappingURL=Tle.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tle/form-inputs/tle-inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!show\">\n    <form (ngSubmit)=\"onSubmit()\" #tleForm=\"ngForm\">\n        <div class=\"col-md-6 funky-show-hide\">\n            <nb-card>\n                <nb-card-header>Child Details</nb-card-header>\n                <nb-card-body>\n                    <div class=\"row full-name-inputs\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"childname\" required [(ngModel)]=\"childname\" name=\"childname\" placeholder=\"Child Name\" />\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" placeholder=\"Parent Name\" class=\"form-control\" id=\"parentname\" required [(ngModel)]=\"parentname\" name=\"parentname\" />\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" placeholder=\"Address 1\" class=\"form-control\" id=\"address1\" required [(ngModel)]=\"address1\" name=\"address1\" />\n                        </div>\n\n                        <div class=\"input-group\">\n                            <input type=\"text\" placeholder=\"Address 2\" class=\"form-control\" id=\"address2\" [(ngModel)]=\"address2\" name=\"address2\" />\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" placeholder=\"Phone 1 xxx-xxx-xxxxx\" class=\"form-control\" id=\"phone1\" required minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"phone1\" name=\"phone1\" #name=\"ngModel\" />\n                            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"name.errors.required\">\n                                    Phone Number is required.\n                                </div>\n                                <div *ngIf=\"name.errors.minlength\">\n                                    Phone Number must be at least 10 digits long.\n                                </div>\n                                <div *ngIf=\"name.errors.maxlength\">\n                                    Phone Number must be at least 10 digits long.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" placeholder=\"Phone 2\" class=\"form-control\" id=\"phone2\" [(ngModel)]=\"phone2\" name=\"phone2\" />\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" placeholder=\"Referral\" class=\"form-control\" id=\"refferal\" required [(ngModel)]=\"refferal\" name=\"refferal\" />\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" placeholder=\"Duration\" class=\"form-control\" id=\"duration\" required [(ngModel)]=\"duration\" name=\"duration\" />\n                        </div>\n                        <div class=\"input-group mail-btn-group\">\n                            <span class=\"input-group-btn\">\n                     <button class=\"btn btn-primary btn-icon\">\n                      <i class=\"ion-ios-email-outline\"></i>\n                      </button>\n                       </span>\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" id=\"email\" required [(ngModel)]=\"email\" name=\"email\">\n                            <span class=\"input-group-btn\">\n                       <button class=\"btn btn-primary\">\n                        @example.com\n                 </button>\n            </span>\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Date Of Birth\" id=\"dateofbirth\" required [(ngModel)]=\"dateofbirth\" name=\"dateofbirth\">\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Start Date\" id=\"startdate\" required [(ngModel)]=\"startdate\" name=\"startdate\">\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Start Time\" id=\"starttime\" required [(ngModel)]=\"starttime\" name=\"starttime\">\n                        </div>\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"End Time\" id=\"endtime\" required [(ngModel)]=\"endtime\" name=\"endtime\">\n                        </div>\n\n\n                    </div>\n                </nb-card-body>\n            </nb-card>\n        </div>\n        <div class=\"col-md-6\">\n            <nb-card>\n                <nb-card-header>Child Class</nb-card-header>\n                <nb-card-body>\n                    <div class=\"form-group\">\n                        <label>Class</label>\n                        <select class=\"form-control\" id=\"tleclass\" required [(ngModel)]=\"tleclass\" name=\"tleclass\">\n                            <option>infant</option>\n                            <option>Twaddler</option>\n                            <option>Toddler</option>\n                            <option>PreSchoolA</option>\n                            <option>PreSchoolB</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Gender</label>\n                        <select class=\"form-control\" id=\"gender\" required [(ngModel)]=\"gender\" name=\"gender\">\n                        <option>Female</option>\n                        <option>Male</option>\n                       </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>#OfDays</label>\n                        <select class=\"form-control\" id=\"numofdays\" required [(ngModel)]=\"numofdays\" name=\"numofdays\">\n                         <option>2</option>\n                         <option>3</option>\n                         <option>5</option>\n                       </select>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!tleForm.form.valid\">Submit</button>\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"tleForm.reset()\">Reset</button>\n                </nb-card-body>\n            </nb-card>\n        </div>\n    </form>\n</div>\n<div *ngIf=\"show\">\n    <div class=\"row\" id=\"amit\" ng-show=\"show\">\n        <div class=\"col-md-12\">\n            <nb-card>\n                <nb-card-header>Rate Details</nb-card-header>\n                <nb-card-body>\n                    <div class=\"paragraphs\">\n                        <div class=\"row\">\n                            <img style=\"float:left\" src=\"assets/images/tle.png\" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n                            <div class=\"span4\">\n                                <div class=\"content-heading\">\n                                    <br/>\n                                    <br/>\n                                    <h3>TLE at Humble / Fall Creek </h3>\n                                </div>\n                                <p style=\"clear:both\">7743 North Sam Houston Parkway East Humble, TX 77396 | 281 441 6005</p>\n                                <p style=\"clear:both\">humble@tlechildcare.com</p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"colors\">\n                        <div class=\"item text-heading\">\n                            <div class=\"color bg-heading\"></div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <h6 class=\"text-heading\">Child Name </h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{childname}}\n                                        </div>\n                                    </h5>\n                                    <h6 class=\"text-heading\">Parent Name</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{parentname}}\n                                        </div>\n                                    </h5>\n\n                                    <h6 class=\"text-heading\">Address1</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{address1}}\n                                        </div>\n                                    </h5>\n                                    <h6 class=\"text-heading\">Address2</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{address2}}\n                                        </div>\n                                    </h5>\n                                </div>\n                                <div class=\"col-md-3\">\n\n                                    <h6 class=\"text-heading\">Date Of Birth</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{dateofbirth}}\n                                        </div>\n                                    </h5>\n\n                                    <h6 class=\"text-heading\">Gender</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{gender}}\n                                        </div>\n                                    </h5>\n\n\n                                    <h6 class=\"text-heading\">Phone1</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{phone1}}\n                                        </div>\n                                    </h5>\n\n                                    <h6 class=\"text-heading\">Email</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{email}}\n                                        </div>\n                                    </h5>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <h6 class=\"text-heading\">StartDate</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{startdate}}\n                                        </div>\n                                    </h5>\n                                    <h6 class=\"text-heading\">Refferal</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{refferal}}\n                                        </div>\n                                    </h5>\n                                    <h6 class=\"text-heading\">Duration</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{duration}}\n                                        </div>\n                                    </h5>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <h6 class=\"text-heading\">TLE Class</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{tleclass}}\n                                        </div>\n                                    </h5>\n                                    <h6 class=\"text-heading\">Number Of Days </h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{numofdays}}\n                                        </div>\n                                    </h5>\n                                    <h6 class=\"text-heading\">Start Time</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{starttime}}\n                                        </div>\n                                    </h5>\n                                    <h6 class=\"text-heading\">End Time</h6>\n                                    <h5>\n                                        <div class=\"item text-info\">\n                                            <div class=\"color bg-info\"></div>\n                                            {{endtime}}\n                                        </div>\n                                    </h5>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"item text-danger\">\n                                        <div class=\"color bg-danger\"></div>\n                                        <p class=\"text-danger\">\n                                            We offer the Next Generation in T.L.E. Curriculum, L.E.A.P. Interactive™! This program is designed to enhance our regular monthly proprietary curriculum where our preschoolers get to interact with touch technology daily via an interactive whiteboard within\n                                            their classroom. This new technology-driven curriculum brings the monthly theme to life utilizing such applications as Google Earth®, videos and real life pictures and sounds.\n                                        </p>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <p>\n                                        Parents' Obligations: While obligated for an entire month of tuition (see below), parents may elect at the time of signing the Schedule of Fees to pay their child’s tuition using one of three convenient payment plans outlined below: Once signed, parents\n                                        must adhere to the agreed upon payment schedule for a minimum of six (6) months, and may only change to a different payment schedule once per calendar year.\n                                    </p>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n\n                                    All tuition Fees are non-refundable and include <br/>\n                                    <ul class=\"list-group\">\n                                        <li class=\"list-group-item\">Enrichment programs (vary by location). These may include: Marvelous Math®, Movin N Groovin®, Music 4 Me®, Dancing Feet®, Yippee-for-Yoga®, Talent Sprouts®, Suddenly Science®, and Super Soccer™.</li>\n                                        <li class=\"list-group-item\">A well-balanced and nutritional lunch, two snacks, and beverages will be provided for all full time children on table food.</li>\n                                        <li class=\"list-group-item\">School will be closed on the following days however, tuition is still due for these holidays:\n                                            <ul class=\"list-group\">\n                                                <li class=\"list-group-item disabled\">New Year's Eve, New Year’s Day, Presidents Day, Memorial Day, Fourth of July, Labor Day, Columbus Day, day before Thanksgiving, Thanksgiving Day, Day following Thanksgiving, Christmas Eve, Christmas Day</li>\n                                                <li class=\"list-group-item disabled\">If a nationally recognized Holiday falls on the weekend, it will be observed the preceding Friday or the following Monday.</li>\n                                                <li class=\"list-group-item disabled\">All School closings follow Humble ISD School Schedule</li>\n                                            </ul>\n                                        </li>\n                                        <li class=\"list-group-item\">\n                                            <font color='violet'> Sibling Discount 10% - Older Child for 5 day FT only. Only one twin eligible.</font>\n                                        </li>\n                                        <li class=\"list-group-item\">\n                                            <font color='violet'> Notice period of 4 weeks for Dis-enrollment</font>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"col-md-6\">\n\n                                    <div class=\"row\">\n                                        <div class=\"demo-checkboxes col-sm-4\">\n\n                                            <h4>Base Tution ${{getBaseRate()}}</h4>\n                                            <nb-checkbox (change)=\"$event.target.checked? addRate(30):subtractRate(30)\">Breakfast</nb-checkbox>\n                                            <nb-checkbox (change)=\"$event.target.checked? addRate(25):subtractRate(25)\">Credit Card</nb-checkbox>\n                                            <nb-checkbox (change)=\"$event.target.checked? addRate(-25):subtractRate(-25)\">Auto Pay</nb-checkbox>\n                                        </div>\n\n                                        <div class=\"demo-radio col-sm-4\">\n                                            <h4>Discount ${{getDiscount()}}</h4>\n                                            <label class=\"custom-control custom-radio\">\n                                              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" (change)=\"$event.target.checked? addDiscount():removeDiscount()\" [disabled]=\"discountRate\">\n                                              <span class=\"custom-control-indicator\"></span>\n                                              <span class=\"custom-control-description\">Work & Family </span>\n                                            </label>\n                                            <label class=\"custom-control custom-radio\">\n                                              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" (change)=\"$event.target.checked? addDiscount():removeDiscount()\" [disabled]=\"discountRate\">\n                                              <span class=\"custom-control-indicator\"></span>\n                                              <span class=\"custom-control-description\">Sibling / Teacher / Military</span>\n                                            </label>\n                                            <label class=\"custom-control custom-radio\">\n                                              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" (change)=\"removeDiscount()\" checked>\n                                              <span class=\"custom-control-indicator\"></span>\n                                              <span class=\"custom-control-description\">None</span>\n                                            </label>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <h4>Net Tution ${{getNetRate()}}</h4>\n                                    </div>\n                                    <div class=\"row\">\n                                        <h5>Monthly ${{getNetRate()}}</h5>\n                                    </div>\n                                    <div class=\"row\">\n                                        <h5>Weekly ${{getWeekly()}}</h5>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <h5>BiWeekly ${{getBiWeekly()}}</h5>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <h5>Registration Fees : $125</h5>\n                                        </div>\n                                    </div>\n\n                                    <p>\n                                        <b> Monthly Payments:</b> A late fee of\n                                        <font color='violet'><b>$40</b></font> will automatically be charged to any account not paid in full by close of business on the 3rd of each month.\n                                    </p>\n                                    <p>\n                                        <b>Weekly Payments:</b> A late fee of\n                                        <font color='violet'><b>$20</b></font> per week will automatically be charged if tuition is not paid by close of business each Tuesday evening.\n                                    </p>\n                                    <p>\n                                        <b>Auto Pay:</b> When you enroll in Auto Pay of the tuition through an ACH bank debit an additional discount of $25.00 per month for full time students only. The auto pay is run on the 1st of each month or the Monday\n                                        of each week.\n                                    </p>\n\n                                </div>\n                            </div>\n                            <br/>\n\n                            <div class=\"row \">\n                                <div class=\"col-md-6 \">\n                                    <p>\n                                        Each child will receive one-week (five consecutive days) of vacation credit per calendar year. In order to receive this credit you must be in attendance for a minimum of six (6) months consecutively. Tuition is waived for that period if a Notification\n                                        of Vacation form is completed at least 14 days in advance.\n                                    </p>\n                                    <p> <b>There is an annual Summer Program Activity Fee of $150.00 payable on April 1st for children 2 years of age and up.</b></p>\n\n                                    <p> <b>Annual Registration Fee of $125.00 is due on August 1st for each new school year.</b> Parents will complete new Registration Packet, update all contact and health information, every registration period for the school\n                                        year.\n                                    </p>\n                                    <p>\n                                        <font color='violet'>Every child must have 2 changes of labeled clean clothes. Parents to supply all grooming materials (labeled) including creams and ointments.</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-md-6 \">\n                                    <p>\n                                        <b>EFT Notice:</b> When you provide a check as a payment, you authorize us to either use the information from your check to make a one-time electronic fund transfer from your account or to process your payment as\n                                        a check transaction. If you elect to pay tuition as a check transaction, there will be a\n                                        <font color='violet'><b>$35.00</b></font> service fee for all returned checks. After 2 checks are returned, tuition payment must automatically be set up as an Auto Pay.\n                                    </p>\n                                    <p>\n                                        <b>Credit Card Payments:</b> Credit card payments are only accepted if you enroll in Auto Pay either monthly or weekly. All credit card payments will be charged convenience fees of\n                                        <font color='violet'><b>$25.00</b></font> monthly.\n                                    </p>\n                                    <p>\n                                        <b>Extra Care:</b>\n                                        <font color='violet'><b>$15.00</b></font> for every 15 minutes or a portion thereof after 6:30 pm; CASH payment due at pickup.\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"row \">\n                                <div class=\"col-md-12 \">\n                                    <p>\n                                        <font color='violet'>To the extent any of the polices or procedures set forth herein differ from the policies set forth in TLE’s Parent Handbook or Enrollment Packet, the policies set forth on this rate sheet shall govern.</font>\n                                    </p>\n                                    <p>\n                                        For this reason The Learning Experience will require all parents to obligate themselves to their entire tuition on a monthly basis (special arrangements may be made for the summer months). Should you decide to keep your child home for any reason, you\n                                        will be required to pay your tuition in full for that period of absence as part of your contractual monthly arrangements with us. Your child cannot re-enter the center without this payment in full. Should administration\n                                        make any verbal arrangements to accept your child after this temporary absence, you will still be obligated for the monthly tuition balance outstanding with such balance being due within a reasonable period of time\n                                        after your child's acceptance back to school.\n                                    </p>\n                                    <p>\n                                        <font color='violet'><b>  ATTORNEY’S FEES AND COST FOR COLLECTIONS: </b></font>Parent herein agrees that in the event The Learning Experience is forced to take any action to collect any amount of unpaid tuition, then, and in that event,\n                                        the parent will be responsible and hereby agrees to reimburse The Learning Experience for any and all attorney’s fees, filing fees, and/or cost associated with any collection efforts made by The Learning Experience\n                                        either individually or through its legal counsel, against the parent.\n                                    </p>\n                                    <p>\n                                        I, the parent/guardian of have read the above tuition responsibility agreement which shall become part of my obligation to the center and I fully understand this obligation and the reasons for its implementation.\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"row \">\n                                <div class=\"col-md-4 \">\n\n                                    <p><br/></p>\n                                    <p><br/></p>\n                                    <font color='violet'><b>Parent Signature </b></font>\n\n                                </div>\n\n                                <div class=\"col-md-4 \">\n\n                                    <p><br/></p>\n                                    <p><br/></p>\n                                    <font color='violet'><b>Date </b></font>\n\n                                </div>\n                                <div class=\"col-md-4 \">\n\n                                    <p><br/></p>\n                                    <p><br/></p>\n                                    <font color='violet'><b>Witness</b></font>\n\n                                </div>\n                            </div>\n\n                            <div class=\"row \">\n                                <div class=\"btn-with-icon-example \">\n                                    <button type=\"button \" class=\"btn btn-primary btn-with-icon \" (click)=\"printTleForm( 'amit') \">\n                                              <i class=\"nb-star \"></i>\n                                              <span>Print</span>\n                                            </button>\n                                </div>\n                            </div>\n\n\n                        </div>\n                    </div>\n                </nb-card-body>\n            </nb-card>\n\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/pages/tle/form-inputs/tle-inputs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .list-group {\n  list-style: decimal inside; }\n\n:host-context(.nb-theme-default) .list-group-item {\n  display: list-item; }\n\n:host-context(.nb-theme-default) .funky-show-hide.ng-hide-add {\n  -webkit-transform: rotateZ(0);\n          transform: rotateZ(0);\n  -webkit-transform-origin: right;\n          transform-origin: right;\n  transition: all 0.5s ease-in-out; }\n\n:host-context(.nb-theme-default) .funky-show-hide.ng-hide-add.ng-hide-add-active {\n  -webkit-transform: rotateZ(-135deg);\n          transform: rotateZ(-135deg); }\n\n:host-context(.nb-theme-default) .funky-show-hide.ng-hide-remove {\n  -webkit-transform: rotateY(90deg);\n          transform: rotateY(90deg);\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  transition: all 0.5s ease; }\n\n:host-context(.nb-theme-default) .funky-show-hide.ng-hide-remove.ng-hide-remove-active {\n  -webkit-transform: rotateY(0);\n          transform: rotateY(0); }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #40dc7e; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .list-group {\n  list-style: decimal inside; }\n\n:host-context(.nb-theme-cosmic) .list-group-item {\n  display: list-item; }\n\n:host-context(.nb-theme-cosmic) .funky-show-hide.ng-hide-add {\n  -webkit-transform: rotateZ(0);\n          transform: rotateZ(0);\n  -webkit-transform-origin: right;\n          transform-origin: right;\n  transition: all 0.5s ease-in-out; }\n\n:host-context(.nb-theme-cosmic) .funky-show-hide.ng-hide-add.ng-hide-add-active {\n  -webkit-transform: rotateZ(-135deg);\n          transform: rotateZ(-135deg); }\n\n:host-context(.nb-theme-cosmic) .funky-show-hide.ng-hide-remove {\n  -webkit-transform: rotateY(90deg);\n          transform: rotateY(90deg);\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  transition: all 0.5s ease; }\n\n:host-context(.nb-theme-cosmic) .funky-show-hide.ng-hide-remove.ng-hide-remove-active {\n  -webkit-transform: rotateY(0);\n          transform: rotateY(0); }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tle/form-inputs/tle-inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TleInputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tle__ = __webpack_require__("../../../../../src/app/pages/tle/form-inputs/tle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TleInputsComponent = (function () {
    function TleInputsComponent() {
        this.childname = 'Jane Dow';
        this.parentname = 'Mummy Doe';
        this.address1 = '4508 Bragdon Way, Glen Allen Va, 23059';
        this.address2 = 'dskjksd';
        this.phone1 = 3095310993;
        this.refferal = "yes";
        this.duration = "1 year";
        this.email = "amit.mawkin@gmail.com";
        this.startdate = "11/1/2017";
        this.tleclass = "infant";
        this.gender = "Female";
        this.numofdays = "5";
        this.dateofbirth = "01/01/2017";
        this.starttime = "0630";
        this.endtime = "1830";
        this.submitted = false;
        this.baserate = "0";
        this.netrate = "0";
        this.show = false;
        this.discountRate = false;
        this.discount = "0";
    }
    TleInputsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        var myHero = new __WEBPACK_IMPORTED_MODULE_1__tle__["a" /* Tle */]("", "", "", 1234567890, "", this.numofdays, this.tleclass, "", "", "", "", 12345567788);
        this.baserate = myHero.rate();
        this.show = true;
    };
    TleInputsComponent.prototype.getBaseRate = function () {
        this.show = true;
        console.log("show is:" + this.show);
        return this.baserate;
    };
    TleInputsComponent.prototype.getDiscount = function () {
        return this.discount;
    };
    TleInputsComponent.prototype.getNetRate = function () {
        return this.netrate;
    };
    TleInputsComponent.prototype.getWeekly = function () {
        var x = parseInt(this.netrate) / 4;
        return x;
    };
    TleInputsComponent.prototype.getBiWeekly = function () {
        var x = parseInt(this.netrate) / 2;
        return x;
    };
    TleInputsComponent.prototype.addRate = function (amount) {
        var x = parseInt(amount) + parseInt(this.baserate);
        this.netrate = x + "";
    };
    TleInputsComponent.prototype.subtractRate = function (amount) {
        var x = parseInt(this.netrate) - parseInt(amount);
        this.netrate = x + "";
    };
    TleInputsComponent.prototype.addDiscount = function () {
        var x = +(parseInt(this.baserate)) - (parseInt(this.baserate) * 0.1);
        this.netrate = x + "";
        this.discountRate = true;
        this.discount = (parseInt(this.baserate) * 0.10) + "";
    };
    TleInputsComponent.prototype.removeDiscount = function () {
        var x = parseInt(this.netrate) + (parseInt(this.baserate) * 0.10);
        this.netrate = x + "";
        this.discountRate = false;
        this.discount = "0";
    };
    TleInputsComponent.prototype.printTleForm = function (divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var popupWin = window.open('', '', 'width=500,height=500');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" media="all" type="text/css" href="assets/css/tle-inputs.component.scss"/></head><body>' + printContents + '</body></html>');
        popupWin.document.close();
        setTimeout(function () {
            popupWin.focus;
            popupWin.print();
        }, 2000);
        //popupWin.close();
    };
    return TleInputsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "childname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "parentname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "address1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "address2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TleInputsComponent.prototype, "phone1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TleInputsComponent.prototype, "phone2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "refferal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "duration", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "startdate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "tleclass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "gender", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "numofdays", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "dateofbirth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "starttime", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TleInputsComponent.prototype, "endtime", void 0);
TleInputsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-inputs',
        styles: [__webpack_require__("../../../../../src/app/pages/tle/form-inputs/tle-inputs.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/tle/form-inputs/tle-inputs.component.html"),
    })
], TleInputsComponent);

//# sourceMappingURL=tle-inputs.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tle/form-inputs/tle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tle; });
var Tle = (function () {
    function Tle(childName, parentName, address1, phone1, refferal, duration, tleclass, dateofbirth, starttime, endtime, address2, phone2) {
        this.childName = childName;
        this.parentName = parentName;
        this.address1 = address1;
        this.phone1 = phone1;
        this.refferal = refferal;
        this.duration = duration;
        this.tleclass = tleclass;
        this.dateofbirth = dateofbirth;
        this.starttime = starttime;
        this.endtime = endtime;
        this.address2 = address2;
        this.phone2 = phone2;
    }
    Tle.prototype.rate = function () {
        if (this.tleclass == 'infant' && this.duration == '5') {
            return '1100';
        }
        else if (this.tleclass == 'infant' && this.duration == '3') {
            return 'not allowed';
        }
        else if (this.tleclass == 'infant' && this.duration == '2') {
            return 'not allowed';
        }
        else {
            return "not allowed";
        }
    };
    return Tle;
}());

//# sourceMappingURL=tle.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tle/form-layouts/tle-layouts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card class=\"inline-form-card\">\n      <nb-card-header>Inline form</nb-card-header>\n      <nb-card-body>\n        <form class=\"form-inline\">\n          <input type=\"text\" class=\"form-control full-width\" placeholder=\"Jane Doe\">\n          <div class=\"input-group full-width\">\n            <div class=\"input-group-addon\">@</div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n          </div>\n          <nb-checkbox>Remember me</nb-checkbox>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Using the Grid</nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"form-group row\">\n            <label for=\"inputEmail1\" class=\"col-sm-3 col-form-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail1\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword2\" class=\"col-sm-3 col-form-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3\">Radios</label>\n            <div class=\"col-sm-9\">\n              <div class=\"form-check\">\n                <label class=\"custom-control custom-radio\">\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" checked>\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">Option one is this and that&mdash;be sure to include why it's great</span>\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"custom-control custom-radio\">\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\">\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">Option two can be something else and selecting it will deselect option one</span>\n                </label>\n              </div>\n              <div class=\"form-check disabled\">\n                <label class=\"custom-control custom-radio\">\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" disabled>\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">Option three is disabled</span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Form without labels</nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Send</button>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Basic form</nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <nb-checkbox>Check me out</nb-checkbox>\n          </div>\n          <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\n        </form>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Block form</nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputFirstName\">First Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputLastName\">Last Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputEmail\">Email</label>\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputWebsite\">Website</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputWebsite\" placeholder=\"Website\">\n            </div>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Horizontal form</nb-card-header>\n      <nb-card-body>\n        <form class=\"form-horizontal\">\n          <div class=\"form-group row\">\n            <label for=\"inputEmail3\" class=\"col-sm-3 form-control-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword3\" class=\"col-sm-3 form-control-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div class=\"checkbox\">\n                <nb-checkbox>Remember me</nb-checkbox>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-warning\">Sign in</button>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/tle/form-layouts/tle-layouts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tle/form-layouts/tle-layouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TleLayoutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TleLayoutsComponent = (function () {
    function TleLayoutsComponent() {
    }
    return TleLayoutsComponent;
}());
TleLayoutsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-layouts',
        styles: [__webpack_require__("../../../../../src/app/pages/tle/form-layouts/tle-layouts.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/tle/form-layouts/tle-layouts.component.html"),
    })
], TleLayoutsComponent);

//# sourceMappingURL=tle-layouts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tle/tle-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TleRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tle_component__ = __webpack_require__("../../../../../src/app/pages/tle/tle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_inputs_tle_inputs_component__ = __webpack_require__("../../../../../src/app/pages/tle/form-inputs/tle-inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_layouts_tle_layouts_component__ = __webpack_require__("../../../../../src/app/pages/tle/form-layouts/tle-layouts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__tle_component__["a" /* TleComponent */],
        children: [{
                path: 'inputs',
                component: __WEBPACK_IMPORTED_MODULE_3__form_inputs_tle_inputs_component__["a" /* TleInputsComponent */],
            }, {
                path: 'layouts',
                component: __WEBPACK_IMPORTED_MODULE_4__form_layouts_tle_layouts_component__["a" /* TleLayoutsComponent */],
            }],
    }];
var TleRoutingModule = (function () {
    function TleRoutingModule() {
    }
    return TleRoutingModule;
}());
TleRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
        ],
    })
], TleRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__tle_component__["a" /* TleComponent */],
    __WEBPACK_IMPORTED_MODULE_3__form_inputs_tle_inputs_component__["a" /* TleInputsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__form_layouts_tle_layouts_component__["a" /* TleLayoutsComponent */],
];
//# sourceMappingURL=tle-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tle/tle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TleComponent = (function () {
    function TleComponent() {
    }
    return TleComponent;
}());
TleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-elements',
        template: "\n    <router-outlet></router-outlet>\n  ",
    })
], TleComponent);

//# sourceMappingURL=tle.component.js.map

/***/ })

});
//# sourceMappingURL=Tle.module.chunk.js.map
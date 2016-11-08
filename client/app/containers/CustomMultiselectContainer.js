import React, { PropTypes } from "react";
import {connect} from "react-redux";
import CustomMultiselect from "../components/CustomMultiselectComponent";
import * as multiselectActions from "../actions/multiselect/multiselect";

let objectData = [  
   {  
      "id":1,
      "value":"Guarantees and Standby Letters of Credit",
      "products":[  
         {  
            "id":13,
            "value":"Financial Guarantee (non Trade)",
            "products":[  
               {  
                  "id":34,
                  "value":"Financial Guarantee"
               }
            ]
         },
         {  
            "id":24,
            "value":"Trade / Commercial Guarantee & Stand-by LC",
            "products":[  
               {  
                  "id":21,
                  "value":"Bid/ Tender Bond"
               },
               {  
                  "id":22,
                  "value":"Performance/ Delivery Guarantee"
               },
               {  
                  "id":23,
                  "value":"Advance Payment Bond"
               },
               {  
                  "id":24,
                  "value":"Warranty/ Retention Bond"
               },
               {  
                  "id":25,
                  "value":"Trade Open Payment Guarantee"
               },
               {  
                  "id":26,
                  "value":"Worker Comp Guarantee"
               },
               {  
                  "id":27,
                  "value":"Lease/ Rental Guarantee"
               },
               {  
                  "id":28,
                  "value":"Litigation Guarantee"
               },
               {  
                  "id":29,
                  "value":"Guarantee Tax & Customs Bond"
               },
               {  
                  "id":30,
                  "value":"Trade Guarantee Other"
               },
               {  
                  "id":31,
                  "value":"Tax Deferment Guarantee"
               },
               {  
                  "id":32,
                  "value":"Shipping Guarantee"
               },
               {  
                  "id":33,
                  "value":"Avalisation/ Co-Acceptance"
               },
               {  
                  "id":35,
                  "value":"Guarantee Silent Payment"
               },
               {  
                  "id":73,
                  "value":"China Draft Acceptance "
               }
            ]
         }
      ]
   },
   {  
      "id":2,
      "value":"Trade Finance Loans",
      "products":[  
         {  
            "id":1,
            "value":"ABF Receivables",
            "products":[  
               {  
                  "id":46,
                  "value":"ABF Receivables"
               }
            ]
         },
         {  
            "id":3,
            "value":"Debtor Management",
            "products":[  
               {  
                  "id":49,
                  "value":"ABF Debtor Management"
               }
            ]
         },
         {  
            "id":4,
            "value":"Distributor Finance",
            "products":[  
               {  
                  "id":45,
                  "value":"Distributor Finance"
               }
            ]
         },
         {  
            "id":7,
            "value":"Export LC",
            "products":[  
               {  
                  "id":53,
                  "value":"Forfaiting (for FI)"
               }
            ]
         },
         {  
            "id":9,
            "value":"Export Post Shipment",
            "products":[  
               {  
                  "id":43,
                  "value":"Export Finance: Invoice Discounting with recourse"
               },
               {  
                  "id":75,
                  "value":"Local Bill Discount under LC"
               },
               {  
                  "id":76,
                  "value":"Export Finance: Documentary Collection Financing"
               },
               {  
                  "id":84,
                  "value":"Export Finance: BoE Discounting/ CAD with Recourse"
               },
               {  
                  "id":89,
                  "value":"Export Finance: BoE Discounting/ CAD without Recourse"
               },
               {  
                  "id":90,
                  "value":"Export Finance: Avalized BoE Discounting/ BAD with Recourse"
               },
               {  
                  "id":91,
                  "value":"Export Finance: Avalized BoE Discounting/ BAD without Recourse"
               }
            ]
         },
         {  
            "id":10,
            "value":"Export Pre Shipment",
            "products":[  
               {  
                  "id":85,
                  "value":"Export Finance: Pre Shipment LC"
               },
               {  
                  "id":86,
                  "value":"Export Finance: Pre Shipment Purchase Order"
               },
               {  
                  "id":87,
                  "value":"Export Pre Shipment Advance Running Account"
               }
            ]
         },
         {  
            "id":11,
            "value":"FI - Export Finance",
            "products":[  
               {  
                  "id":52,
                  "value":"Export Portfolio Refinance"
               }
            ]
         },
         {  
            "id":12,
            "value":"FI - Import Finance",
            "products":[  
               {  
                  "id":50,
                  "value":"Import LC Reimbursement Finance"
               },
               {  
                  "id":51,
                  "value":"Import Portfolio Refinance"
               },
               {  
                  "id":88,
                  "value":"Import LC Finance"
               }
            ]
         },
         {  
            "id":14,
            "value":"Import Finance",
            "products":[  
               {  
                  "id":36,
                  "value":"Import Finance: Import Pre Payment Financing"
               },
               {  
                  "id":37,
                  "value":"Import Finance: Pre Settlement of d/p Import LC"
               },
               {  
                  "id":38,
                  "value":"Import Finance: Payable Finance Advance Payment Pre-Shipment"
               },
               {  
                  "id":39,
                  "value":"Import Finance: Payable Finance (Asia)Post-Shipment"
               },
               {  
                  "id":40,
                  "value":"Import Finance: Post Import Finance"
               },
               {  
                  "id":41,
                  "value":"Import Finance: Post Import Finance with Trust Receipt"
               },
               {  
                  "id":42,
                  "value":"Import Finance: Post Import Finance for CAPEX"
               }
            ]
         },
         {  
            "id":16,
            "value":"Inventory Finance",
            "products":[  
               {  
                  "id":48,
                  "value":"ABF Inventory"
               }
            ]
         },
         {  
            "id":18,
            "value":"Purchase Order Finance",
            "products":[  
               {  
                  "id":47,
                  "value":"ABF Purchase Order"
               }
            ]
         },
         {  
            "id":22,
            "value":"Supplier Finance",
            "products":[  
               {  
                  "id":44,
                  "value":"Supplier Pre Shipment - Unconfirmed"
               },
               {  
                  "id":92,
                  "value":"Supplier Pre Shipment - Confirmed"
               },
               {  
                  "id":93,
                  "value":"Supplier Post Shipment - Pre Acceptance"
               },
               {  
                  "id":94,
                  "value":"Supplier Post Shipment - Post Acceptance"
               }
            ]
         }
      ]
   },
   {  
      "id":3,
      "value":"Receivables Finance",
      "products":[  
         {  
            "id":19,
            "value":"Receivables Finance",
            "products":[  
               {  
                  "id":57,
                  "value":"FSC Overdraft"
               },
               {  
                  "id":77,
                  "value":"Receivables Forfaiting Factoring - AR Purchase - Corporate Risk - Without Recourse"
               },
               {  
                  "id":78,
                  "value":"Receivables Forfaiting Factoring - AR Purchase - Corporate Risk - Limited Recourse"
               },
               {  
                  "id":79,
                  "value":"Receivables Forfaiting Factoring - AR Purchase - Corporate Risk - With Recourse"
               },
               {  
                  "id":80,
                  "value":"Receivables Forfaiting Factoring - AR Purchase - Credit Insured - Without Recourse"
               },
               {  
                  "id":81,
                  "value":"Receivables Forfaiting Factoring - AR Purchase - Credit Insured - Limited Recourse"
               },
               {  
                  "id":82,
                  "value":"Receivables Forfaiting Factoring - AR Purchase - Credit Insured - With Recourse"
               }
            ]
         },
         {  
            "id":23,
            "value":"Supplier Finance",
            "products":[  
               {  
                  "id":54,
                  "value":"Supplier Finance Confirmed Payables - Non Trigger based"
               },
               {  
                  "id":55,
                  "value":"Supplier Finance Confirmed Payables - Trigger based"
               },
               {  
                  "id":56,
                  "value":"Supplier Finance Confirmed Payables - Spanish"
               }
            ]
         }
      ]
   },
   {  
      "id":4,
      "value":"Structured Export Finance",
      "products":[  
         {  
            "id":21,
            "value":"Structured Export Finance",
            "products":[  
               {  
                  "id":58,
                  "value":"ECA Covered"
               },
               {  
                  "id":59,
                  "value":"Commercial Trade Loan"
               },
               {  
                  "id":60,
                  "value":"Structured Export Advisory"
               },
               {  
                  "id":61,
                  "value":"Syndicated Or Bilateral Trade Loan"
               },
               {  
                  "id":62,
                  "value":"AKA Supplier Loan"
               }
            ]
         }
      ]
   },
   {  
      "id":5,
      "value":"Structured Commodity Trade Finance",
      "products":[  
         {  
            "id":20,
            "value":"Structured Commodity Trade Finance",
            "products":[  
               {  
                  "id":63,
                  "value":"Commodity Pre Export"
               },
               {  
                  "id":64,
                  "value":"Commodity Borrowing Based"
               },
               {  
                  "id":65,
                  "value":"Commodity Reserve Based"
               },
               {  
                  "id":66,
                  "value":"Commodity Pre Payment"
               },
               {  
                  "id":67,
                  "value":"Commodity Counter Trade"
               },
               {  
                  "id":68,
                  "value":"Commodity Tolling"
               }
            ]
         },
         {  
            "id":25,
            "value":"Trade Asset Finance",
            "products":[  
               {  
                  "id":69,
                  "value":"Commodity Transactional"
               },
               {  
                  "id":70,
                  "value":"Commodity Trade Asset"
               },
               {  
                  "id":71,
                  "value":"Commodity Stock"
               },
               {  
                  "id":72,
                  "value":"Commodity Plant Machinery"
               }
            ]
         }
      ]
   },
   {  
      "id":6,
      "value":"Documentary Trade & Services",
      "products":[  
         {  
            "id":2,
            "value":"Automated Trade Data Matching Service",
            "products":[  
               {  
                  "id":17,
                  "value":"BPO Based Services for Importer"
               },
               {  
                  "id":18,
                  "value":"TSU Based Matching Services for Importer"
               },
               {  
                  "id":19,
                  "value":"BPO Based Services for Exporter"
               },
               {  
                  "id":20,
                  "value":"TSU Based Matching Services for Exporter"
               }
            ]
         },
         {  
            "id":5,
            "value":"Document Management Services",
            "products":[  
               {  
                  "id":16,
                  "value":"Export Doc Creation"
               }
            ]
         },
         {  
            "id":6,
            "value":"Documentary Collection",
            "products":[  
               {  
                  "id":14,
                  "value":"Doc Collection Import"
               },
               {  
                  "id":15,
                  "value":"Doc Collection Export"
               }
            ]
         },
         {  
            "id":8,
            "value":"Export LC",
            "products":[  
               {  
                  "id":3,
                  "value":"Export LC Advising"
               },
               {  
                  "id":4,
                  "value":"Export LC Open Confirmation"
               },
               {  
                  "id":5,
                  "value":"Export LC Silent Confirmation"
               },
               {  
                  "id":6,
                  "value":"Export Letter of Transfer"
               },
               {  
                  "id":7,
                  "value":"Export LC Documents presentation without Discount"
               },
               {  
                  "id":8,
                  "value":"Export LC Sight Discounting Recourse"
               },
               {  
                  "id":9,
                  "value":"Export LC Deferred Payment Discounting Recourse"
               },
               {  
                  "id":10,
                  "value":"Export LC Sight Discounting No Recourse"
               },
               {  
                  "id":11,
                  "value":"Export LC Deferred Payment Discounting No Recourse"
               },
               {  
                  "id":74,
                  "value":"LUT for Buyer's Credit"
               },
               {  
                  "id":83,
                  "value":"HK LC Network (Import Document Checking)"
               }
            ]
         },
         {  
            "id":15,
            "value":"Import LC",
            "products":[  
               {  
                  "id":1,
                  "value":"Import LC Sight"
               },
               {  
                  "id":2,
                  "value":"Import LC Deferred Payment"
               }
            ]
         },
         {  
            "id":17,
            "value":"LC Reimbursement",
            "products":[  
               {  
                  "id":12,
                  "value":"LC Reimbursement"
               },
               {  
                  "id":13,
                  "value":"LC Reimbursement - IRU"
               }
            ]
         }
      ]
   }
];

let selectorsList = [
    {
        "name":"lvl1",
        "label":"TF Product (Level 1)",
        "type":"single_select",
        "active":"true",
        "parent":"true"
    },
    {
        "name":"lvl2",
        "label":"TF Product (Level 2)",
        "type":"single_select",
        "active":"false",
        "parent":"true"
    },
    {
        "name":"lvl3",
        "label":"TF Product (Level 3)",
        "type":"multiple_select",
        "active":"true",
        "parent":"false"
    },

];

const mapStateToProps = (state,ownProps) => {	
    console.log("state ", state);
    return {
        selectors: selectorsList,
        data: objectData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadData:()=>{
          //  dispatch(multiselectActions.load());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomMultiselect);

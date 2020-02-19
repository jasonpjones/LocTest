/**
 * Created by jjones on 2/5/2020.
 */

LocTest.ChartStrings = {};


LocTest.ChartStrings.US = {
    settings: {
        currency: {
            defaults: {
                symbol: '$',
                symbolPosition: 'left',
                decimalSeparator: '.',
                groupSeparator: ','
            }
        },
        dates: {
            shortGridFormat: 'MMM D, YYYY',
            ultraShortGridFormat: 'MMM D'       //todo - for other locales this is 'D MMM'
        }
    },
    toolTips: {
        returnToChart: 'Return to the chart view',
        remove: 'Remove',
        createOppFromLead: 'Create an opportunity with this lead',
        filterOptions: 'Filter Options',
        downloadPDF: 'Download PDF'
    },
    foo: {
      apple: 'orange'
    },
    charts: {
        opportunity_actual_versus_projected_revenue: {
            displayName: 'Business Health',
            infoText: "Business Health helps illustrate the effectiveness of your company's sales by comparing actual sales with forecasted sales. Projected sales are included to illustrate expected future sales within the context of past performance.",
            actual: 'Actual',
            potential: 'Potential',
            projected: 'Projected'
        },
        past_opportunity_revenue_and_cost: {
            displayName: 'Revenue vs. Costs',
            infoText: "Revenue vs. Cost analyzes a company's products by comparing the revenue they have produced to their associated costs over a given time frame.",
            opportunities: 'Opportunities',
            revenue: 'Revenue',
            costs: 'Costs'
        }
    }
};

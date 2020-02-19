/**
 * Created by jjones on 2/5/2020.
 */


LocTest.DialogStrings.DE = {
    general: {
        buttons: {
            cancel: 'Cancel',
            close: 'Close'
        },
        headers: {
            chartOptions: 'Chart Options'
        }
    },
    modalContext: {
        buttons: {
            editChart: 'Edit Chart',
            deleteChart: 'Delete Chart'
        }
    },
    customChart: {
        header: 'Custom Chart',
        entities: {
            contact: {
                displayName: 'Contact',
                fields: {
                    company: 'Company',
                    title: 'Title',
                    idStatus: 'ID/Status',
                    city: 'City',
                    state: 'State',
                    postalCode: 'Zip-code',
                    country: 'Country',
                    lastResults: 'Last Results',
                    department: 'Department',
                    referredBy: 'Referred By'
                }
            },
            opportunity: {
                displayName: 'Opportunity',
                fields: {
                    total: 'Total Value',
                    weighted: 'Weighted Value',
                    probability: 'Probability',
                    status: 'Status',
                    stage: 'Stage',
                    daysOpen: 'Days Open',
                    contacts: 'Contacts',
                    associations: 'Associations',
                    competitor: 'Competitor',
                    closereason: 'Close Reason'
                }
            },
            activity: {
                displayName: 'Activity',
                fields: {
                    type: 'Activity Type',
                    schedWith: 'Scheduled With',
                    schedBy: 'Scheduled By',
                    schedFor: 'Scheduled For',
                    assocWith: 'Associated With',
                    accessors: 'Users and Resources',
                    duration: 'Duration',
                    location: 'Location',
                    priority: 'Priority',
                    invitationStatus: 'Invitation Status',
                    clearedCount: 'Is Cleared',
                    timelessCount: 'Is Timeless',
                    recurringCount: 'Is Recurring',
                    eventCount: 'Is Event',
                    outlookCount: 'Is Outlook'
                }
            },
            history: {
                displayName: 'History',
                fields: {
                    type: 'History Type',
                    contacts: 'Contacts',
                    shareWith: 'Share With',
                    attachCount: 'Attachments',
                    recordManager: 'Record Manager',
                    contactCompanies: 'Contact Company',
                    createdBy: 'Created By'
                }
            }
        },
        labels: {
            name: 'Name:',
            entityType: 'Entity Type:',
            field: 'Field:',
            operation: 'Operation:',
            chartType: 'Chart Type:',
            addToView: 'Add to view:'
        },
        select: {
            operations: {
                count: 'Count',
                avg: 'Average',
                sum: 'Sum'
            },
            chartTypes: {
                bar: 'Bar',
                column: 'Column',
                pie: 'Pie',
                kpi: 'KPI'
            }
        },
        buttons: {
            ok: 'Save Chart'
        }
    },
    addView: {
        header: 'Add a View',
        labels: {
            viewName: 'New View Name:'
        },
        buttons: {
            ok: 'Add View'
        }
    },
    deleteView: {
        header: 'Delete a View',
        labels: {
            pickView: 'Select the view to delete:',
            warning: 'Deleting a view permanently removes it and can not be undone.'
        },
        buttons: {
            ok: 'Delete View'
        }
    },
    resetViews: {
        header: 'Reset Views',
        labels: {
            warning: 'Warning: Resetting your views will result in the loss of any customizations you have made, and can not be undone. Please proceed with caution.'
        },
        buttons: {
            ok: 'Reset Views'
        }
    }

};
import { Block } from 'payload/types';

const Alerts: Block = {
    slug: 'alert',
    fields: [
        {
            name: 'type',
            type: 'select',
            options: [
                {
                    value: 'info',
                    label: 'Info',
                },
                {
                    value: 'success',
                    label: 'Success',
                },
                {
                    value: 'warning',
                    label: 'Warning',
                },
                {
                    value: 'danger',
                    label: 'Danger',
                },
            ],
        },
        {
            name: 'message',
            type: 'textarea',
        },
    ]
};
export default Alerts;
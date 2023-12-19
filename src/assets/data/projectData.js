const pData = JSON.parse(localStorage.getItem('pData')) || [
    {
        id: '1',
        location: 'Bangalore',
        status: 'Pending'
    },
    {
        id: '2',
        location: 'Hyderabad',
        status: 'Finished'
    },
    {
        id: '3',
        location: 'Chennai',
        status: 'In progress'
    }
];

export default pData;

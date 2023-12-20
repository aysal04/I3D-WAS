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
    },
    {
        id: '4',
        location: 'Tamil nadu',
        status: 'In progress'
    },
    {
        id: '5',
        location: 'Telangana',
        status: 'In progress'
    },
    {
        id: '6',
        location: 'Gujarat',
        status: 'In progress'
    },
    {
        id: '7',
        location: 'Chattisgrah',
        status: 'In progress'
    }
];

export default pData;

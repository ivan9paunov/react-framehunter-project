export const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
};
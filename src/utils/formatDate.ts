export const formatDate = (dateString: string): string => {
    const date = new Date(dateString).toLocaleDateString('TH', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return date;
};


export async function getTicketDetails(ticketId) {
    try {
        const response = await fetch(`https://your-backend-url.com{ticketId}`);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching ticket:", error);
    }
}


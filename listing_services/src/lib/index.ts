interface Data {
    id?: string;
    title: string;
    description: string;
    price: number;
}

class DataHandler {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async fetchData(): Promise<Data[]> {
        try {
            const response = await fetch(`${this.baseUrl}/Listings/GetListings`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

    async createData(data: Data): Promise<Data> {
        try {
            const response = await fetch(`${this.baseUrl}/Listings/CreateListing`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error creating data:", error);
            throw error;
        }
    }

    async updateData(data: Data): Promise<Data> {
        try {
            const response = await fetch(`${this.baseUrl}/Listings/UpdateListing`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error updating data:", error);
            throw error;
        }
    }

    async deleteData(id: string): Promise<void> {
        try {
            await fetch(`${this.baseUrl}/Listings/DeleteListing${id}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error("Error deleting data:", error);
            throw error;
        }
    }
}
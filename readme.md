Documentation
Schema Definition

// Listing schema definition
ListingSchema  includes the following attributes
 title: String
 description: String
 price: Number
Also, other additional properties can be easily added to the schema as needed.

Service Components

Listing Creation
Creates a new listing with the provided title, description, and price.

Listing Retrieval
Retrieves all listings or a specific listing by its ID from storage.

Listing Update:
Updates an existing listing with new information.

Listing Deletion
Deletes a listing by its ID from storage.

Listing Page Component
Fetches listings from the server and dynamically displays them on the listing page. Utilizes the defined schema and service components to interact with the listing data. These components work together to provide a complete listing service, allowing users to create, retrieve, update, and delete listings effectively.


import InventoryTable from "../components/InventoryTable";
import PageHeader from "../components/PageHeader";

function AllItemsPage() {
    const inventoryItems = [
        { id: 1, name: "Red Shirt", category: "Clothing", quantity: 10 },
        { id: 2, name: "Blue Jeans", category: "Clothing", quantity: 5 },
        { id: 3, name: "Laptop", category: "Electronics", quantity: 3 },
        { id: 4, name: "Bookshelf", category: null, quantity: 2 },
    ];

    return (
        <>
            <PageHeader title="All items" />
            <InventoryTable inventoryItems={inventoryItems} />
        </>
    );
}

export default AllItemsPage;

import { Frequency } from "@/enums/Frequency";

export const Charities = [
    {
        name: "Blank Page Eradication Foundation",
        description:
            "Helping writers everywhere conquer the dreaded blinking cursor and fill that blank page; one word at a time.",
        email: "hello@blankpagefoundation.org",
        phone: "1-800-ERASE-BL",
        amountRaised: "$14,000,000",
        targetAmount: "$50,000,000",
        imageUrl:
            "https://images.unsplash.com/photo-1711843250836-5d3869042f3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        donations: [
            {
                donorName: "Jane Smith",
                amount: 100,
                frequency: Frequency.OneTime,
                date: "2025-05-26T10:30:00Z",
            },
            {
                donorName: "Acme Corp",
                amount: 5000,
                frequency: Frequency.Monthly,
                date: "2025-05-01T08:00:00Z",
            },
        ],
    },
    {
        name: "International Left Sock Reunion Society",
        description:
            "Reuniting lonely single socks with their long-lost partners since laundry day disasters know no borders.",
        email: "support@leftsockreunion.org",
        phone: "1-888-SOCK-UPS",
        amountRaised: "$1,000,000",
        targetAmount: "$5,000,000",
        imageUrl:
            "https://images.unsplash.com/photo-1613151848917-80e67f421fff?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        donations: [
            {
                donorName: "John Doe",
                amount: 50,
                frequency: Frequency.OneTime,
                date: "2025-05-25T14:00:00Z",
            },
            {
                donorName: "Sock Lovers Inc.",
                amount: 2000,
                frequency: Frequency.Monthly,
                date: "2025-05-01T09:00:00Z",
            },
        ],
    },
    {
        name: "Operation Sneeze Whisperers",
        description:
            "Providing gentle acknowledgment and 'bless yous' to people whose sneezes go unnoticed in the wild.",
        email: "contact@sneezewhisperers.org",
        phone: "1-877-AHH-CHOO",
        amountRaised: "$2,000,000",
        targetAmount: "$3,000,000",
        imageUrl:
            "https://images.unsplash.com/photo-1722084434467-2d76872bfa21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        donations: [
            {
                donorName: "Alice Johnson",
                amount: 25,
                frequency: Frequency.OneTime,
                date: "2025-05-24T11:00:00Z",
            },
            {
                donorName: "Sneeze Supporters",
                amount: 1000,
                frequency: Frequency.Monthly,
                date: "2025-05-01T10:00:00Z",
            },
        ],
    },
    {
        name: "Feline Opera Appreciation Fund",
        description:
            "Funding tiny earplugs and front-row seats for discerning cats who demand high culture between catnaps.",
        email: "info@felineopera.org",
        phone: "1-866-MEOW-AWD",
        amountRaised: "$8,000,000",
        targetAmount: "$10,000,000",
        imageUrl:
            "https://images.unsplash.com/photo-1600415599762-662edc3e2eca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        donations: [
            {
                donorName: "Bob Brown",
                amount: 75,
                frequency: Frequency.OneTime,
                date: "2025-05-23T15:00:00Z",
            },
            {
                donorName: "Cat Lovers United",
                amount: 3000,
                frequency: Frequency.Monthly,
                date: "2025-05-01T12:00:00Z",
            },
        ],
    },
    {
        name: "Friends of the Untranslatable Emoji",
        description:
            "Championing the creation and preservation of emojis that cannnott be put into words.",
        email: "emoji@untranslatablefriends.org",
        phone: "1-855-EMO-JIYA",
        amountRaised: "$4,300,000",
        targetAmount: "$6,000,000",
        imageUrl:
            "https://images.unsplash.com/photo-1600960568458-7966d439289e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        donations: [
            {
                donorName: "Charlie Green",
                amount: 150,
                frequency: Frequency.OneTime,
                date: "2025-05-22T13:00:00Z",
            },
            {
                donorName: "Emoji Enthusiasts",
                amount: 2000,
                frequency: Frequency.Monthly,
                date: "2025-05-01T11:00:00Z",
            },
        ],
    },
    {
        name: "Pajama Pants on Public Transit Alliance",
        description:
            "Advocating for the universal right to wear pajamas wherever you go. Especially on crowded buses and subways.",
        email: "join@pjtransitalliance.org",
        phone: "1-844-PJ-TRNS",
        amountRaised: "$2,000,000",
        targetAmount: "$3,000,000",
        imageUrl:
            "https://images.unsplash.com/photo-1604936509922-a0ae4fd19e3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        donations: [
            {
                donorName: "David White",
                amount: 10000,
                frequency: Frequency.OneTime,
                date: "2025-05-21T16:00:00Z",
            },
            {
                donorName: "Transit Pajama Lovers Association",
                amount: 150000,
                frequency: Frequency.Monthly,
                date: "2025-05-01T14:00:00Z",
            },
            {
                donorName: "Emily Blue",
                amount: 50000,
                frequency: Frequency.OneTime,
                date: "2025-05-20T09:00:00Z",
            },
            {
                donorName: "Comfort First Coalition",
                amount: 250000,
                frequency: Frequency.Annual,
                date: "2025-05-01T10:00:00Z",
            },
        ],
    },
];

export default Charities;

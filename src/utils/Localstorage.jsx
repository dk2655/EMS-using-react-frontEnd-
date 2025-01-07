const employees = [
    {
        "id": 1,
        "firstName": "Rajesh",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "UI Design",
                "taskDescription": "Create a user-friendly design for the login page.",
                "taskDate": "2024-12-30",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "API Integration",
                "taskDescription": "Integrate payment API into the application.",
                "taskDate": "2024-12-31",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "taskDescription": "Resolve critical issues in the authentication module.",
                "taskDate": "2024-12-29",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Content Update",
                "taskDescription": "Update content on the home page.",
                "taskDate": "2024-12-28",
                "category": "Content",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false

            },
            {
                "taskTitle": "Database Optimization",
                "taskDescription": "Optimize queries for faster load times.",
                "taskDate": "2024-12-30",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "SEO Analysis",
                "taskDescription": "Analyze website performance for SEO improvements.",
                "taskDate": "2024-12-27",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Amit",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Report Generation",
                "taskDescription": "Generate monthly sales reports.",
                "taskDate": "2024-12-29",
                "category": "Analytics",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests for the new feature.",
                "taskDate": "2024-12-30",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend weekly team sync-up meeting.",
                "taskDate": "2024-12-28",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Neha",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Feature Deployment",
                "taskDescription": "Deploy new features to the staging environment.",
                "taskDate": "2024-12-31",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Performance Testing",
                "taskDescription": "Perform stress testing on the login module.",
                "taskDate": "2024-12-30",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Documentation",
                "taskDescription": "Prepare technical documentation for the API.",
                "taskDate": "2024-12-27",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Siddharth",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Plan and execute a New Year campaign.",
                "taskDate": "2024-12-31",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "UI Bug Fix",
                "taskDescription": "Fix UI glitches on the dashboard.",
                "taskDate": "2024-12-30",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Survey Analysis",
                "taskDescription": "Analyze customer feedback survey results.",
                "taskDate": "2024-12-29",
                "category": "Analytics",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];



const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}]


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }

}

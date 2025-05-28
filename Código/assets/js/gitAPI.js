 const gitApi = {}

    gitApi.getData = () => {
        const url = `https://raw.githubusercontent.com/FPCoutoDev/js-developer-portfolio/refs/heads/main/data/profile.json`;
            return fetch(url)
            .then((response) => response.json())
            }

        gitApi.getData()

        async function getData() {
            const url = `https://raw.githubusercontent.com/FPCoutoDev/js-developer-portfolio/refs/heads/main/data/profile.json`;
            const fetching = await fetch(url)
            return await fetching.json()
        }W
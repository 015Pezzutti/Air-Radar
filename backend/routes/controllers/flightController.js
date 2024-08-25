const axios = require('axios');

const getFlightData = async (req, res) => {
    try {
        const response = await axios.get('URL_DA_API_DE_RASTREAMENTO', {
            params: {
                // Parâmetros como coordenadas ou filtros, dependendo da API escolhida
            },
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter dados dos voos', error });
    }
};

module.exports = { getFlightData };

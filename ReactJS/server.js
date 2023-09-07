import express from 'express'
import colors from 'colors'


//REST Object
const app = express();

//REST API
app.get("/", (req, res) => {
	res.send({
		message: "Welcome to Bharathi's Boutique",
	});
});

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`.bgCyan.white);
});

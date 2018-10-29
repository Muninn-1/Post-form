 import React, { Component} from 'react';

 class FormMovie extends Component {

 	constructor(props) {
		super(props);
		this.state = {
			name: '',
			poster: '',
			comment: '',
		}
	}

	onChange = (event) => {
 		this.setState({[event.target.name]: event.target.value});
	}

	submitForm = (event) => {
		const config = {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(this.state),
		};
		const url = `http://92.175.11.66:3001/api/quests/movies/`;

		event.preventDefault();
		fetch(url, config)
			.then(res => res.json())
			.then(res => {
				if (res.error) {
					alert(res.error);
				} else {
					alert(`Film ajouté avec l'ID ${res}!`);
				}
			}).catch(e => {
				console.error(e);
				alert('Erreur lors de l\'ajout d\'un film');
			});

	}

	render(){
		return (
			<div className="FormMovie">
				<h1>Saisi d'un fim</h1>

				<form onSubmit={this.submitForm}>
					<fieldset>
						<legend>Informations</legend>
						<div className="form-data">
							<label htmlFor="lastname">Nom</label>
							<input
							type="text"
							id="name"
							name="name"
							onChange={this.onChange}
							value={this.state.name}
							/>
						</div>

						<div className="form-data">
							<label htmlFor="firstname">Poster</label>
							<input
							type="text"
							id="poster"
							name="poster"
							onChange={this.onChange}
							value={this.state.poster}
							/>
						</div>

						<div className="form-data">
							<label htmlFor="comment">Commentaire</label>
							<input
							type="text"
							id="comment"
							name="comment"
							onChange={this.onChange}
							value={this.state.comment}
							/>
						</div>
						<hr />
						<div className="form-data">
							<input type="submit" value="Envoyer" />
						</div>
					</fieldset>
				</form>
			</div>
		)
	};
 }

 export default FormMovie;
import React, {Component} from 'react';
import TVShow from './TVShow';
import {Grid} from 'semantic-ui-react';

class TVShowList extends Component {
	mapAllShows = () =>
		!!this.props.searchTerm
			? this.props.shows.map((s) => {
					s.name.toLowerCase().includes(this.props.searchTerm) && (
						<TVShow
							show={s}
							key={s.id}
							selectShow={this.props.selectShow}
						/>
					);
			  })
			: this.props.shows.map((s) => (
					<TVShow
						show={s}
						key={s.id}
						selectShow={this.props.selectShow}
					/>
			  ));

	render() {
		return (
			<div className="TVShowList">
				<Grid>{this.mapAllShows()}</Grid>
			</div>
		);
	}
}

export default TVShowList;

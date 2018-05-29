import React, { Component } from 'react';
import mui from 'material-ui';
import Sticky from 'react-sticky';
import { Link } from 'react-router-dom';

//const AppBar = mui.AppBar;

//const Paper = mui.Paper;
const styles = {
	logoStyles: {
		background: ` no-repeat center center`,
		height: '25vw',
		width: '25vw',
		maxWidth: '200px',
		maxHeight: '200px',
		backgroundSize: 'contain',
		borderRadius: '100%',
		boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)',
		alignSelf: 'center'
	},
	header: {
		display: 'flex',
		flexFlow: 'row no-wrap',
		justifyContent: 'space-between',
		padding: '15px 0',
		marginTop: '50px'
	},
	figCaption: {
		textAlign: 'right',
		 maxWidth: '50%',
		 alignSelf: 'center',
		 fontFamily: '"Amatic SC"'
	}
}

class Header extends Component {
	render() {
		return (
			<header style={styles.header}>
				<figure className='animated flipInY' style={styles.logoStyles}>
				</figure>
				<figcaption className='animated flipInX' style={styles.figCaption}>
					<h1 style={{fontSize: '1em'}}>Hi. My name is John Seol, and I'm a Computer Science major at the University of Illinois <span style={{color: '#B0BEC5', fontSize: '1.2em', textShadow: '1px 1px 1px rgba(0, 0, 0, .5)'}}>at Urbana-Champaign, IL.</span></h1>
					<p>I enjoy creating things with code!</p>
				</figcaption>
			</header>
		);
    }
}

export default Header;
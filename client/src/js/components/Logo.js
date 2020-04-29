import React from 'react';
import PropTypes from 'prop-types';

function Logo({ color, text, size }) {
	return (
		<div className={`logo ${size === 'small' && 'small'}`}>
			<svg
				className="logo_symbol"
				fill={color === 'white' ? '#fff' : '#124B6B'}
				viewBox="0 0 247 157"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0)">
					<path d="M20.6653 70.7516V17.1008H97.0811V0.221802H0V156.762H20.6653V93.4642H62.5003V76.609H20.6653V70.7516Z" />
					<path d="M162.995 156.976H162.932L162.98 157.004L162.995 156.976Z" />
					<path d="M151.926 156.865C151.948 156.865 156.157 156.865 162.778 156.865V156.96C162.829 156.964 162.881 156.964 162.932 156.96C162.899 156.933 162.851 156.901 162.785 156.857C187.383 156.834 245.229 156.727 245.229 156.727V139.594L165.37 139.349L151.926 156.865Z" />
					<path d="M160.594 0.0158687C175.861 3.37424 184.235 15.5008 185.523 17.085H247.018V0.158447C247.018 0.158447 160.211 -0.0593778 160.594 0.0158687Z" />
					<path d="M160.892 93.4484C160.524 93.5236 227.237 93.4484 227.237 93.4484L227.347 76.506H185.682C184.393 78.0901 176.163 90.09 160.892 93.4484Z" />
					<path d="M125.277 110.858L116.531 104.327L102.126 93.5632H130.87V93.5949H132.402C133.098 93.5949 138.934 93.4444 139.336 93.3652C153.67 92.4279 164.956 88.4847 173.195 81.5356C181.163 74.8057 185.793 65.5094 187.085 53.6469C187.348 51.5678 187.48 49.4719 187.479 47.3737C187.479 47.2153 187.479 47.0648 187.479 46.9064C187.479 46.7479 187.479 46.5935 187.479 46.4351C187.48 44.3381 187.348 42.2436 187.085 40.1658C185.786 28.3086 181.156 19.0123 173.195 12.2771C164.959 5.32273 153.674 1.37822 139.339 0.443577C138.938 0.368331 138.533 0.297041 138.132 0.217834V0.249524H134.482C133.798 0.249524 133.116 0.217834 132.42 0.217834H130.87V0.249524L102.376 0.281201L102.358 17.1523H133.043C143.319 17.1523 151.492 19.8123 157.563 25.1324C161.471 28.4488 164.306 33.0072 165.664 38.158C167.02 43.8992 167.02 49.9135 165.664 55.6548C164.305 60.8051 161.471 65.3632 157.563 68.6803C151.49 73.9978 143.316 76.6578 133.043 76.6604H67.6223V93.5632L148.214 153.733L160.958 137.341L125.277 110.858Z" />
				</g>
				<defs>
					<clipPath id="clip0">
						<rect width="247" height="157" />
					</clipPath>
				</defs>
			</svg>

			{text && (
				<p
					className="logo_text"
					style={{ color: color === 'white' ? '#fff' : '#414141' }}
				>
					Find the Right Employee
				</p>
			)}
		</div>
	);
}

Logo.propTypes = {
	color: PropTypes.string,
	text: PropTypes.bool,
	size: PropTypes.string,
};

export default Logo;
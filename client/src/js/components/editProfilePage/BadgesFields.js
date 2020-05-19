import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Input from '../elements/Input';
import Checkbox from '../elements/Checkbox';

import { updateLoggedField } from '../../redux/actions/AuthActions';

const mapStateToProps = (state) => ({
	updatedLoggedUser: state.AuthReducer.updatedLoggedUser,
});

const mapDispatchToProps = (dispatch) => {
	return {
		updateLoggedField: (obj) => dispatch(updateLoggedField(obj)),
	};
};

export const BadgesFields = (props) => {
	const {
		// Globals
		updatedLoggedUser,
		updateLoggedField,
		// Passed
		jobsSuggestions,
		setJobsSuggestions,
		locationSuggestions,
		setLocationSuggestions,
	} = props;

	// Jobs
	const [typingTimeout, setTypingTimeout] = useState(0);
	const getJobSuggestions = (query) => {
		updateLoggedField({
			fieldName: 'job_title',
			fieldValue: query,
		});
		if (typingTimeout) clearTimeout(typingTimeout);
		setTypingTimeout(
			setTimeout(() => {
				axios
					.get(
						`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${updatedLoggedUser.job_title}`
					)
					.then((res) => setJobsSuggestions(res.data.slice(0, 4).reverse()));
			}, 500)
		);
	};

	// Locations
	const getLocationSuggestions = (query) => {
		updateLoggedField({ fieldName: 'city', fieldValue: query });
		if (typingTimeout) clearTimeout(typingTimeout);
		setTypingTimeout(
			setTimeout(() => {
				axios
					.get(`https://api.postcodes.io/places?q=${updatedLoggedUser.city}`)
					.then((res) => setLocationSuggestions(res.data.result.slice(0, 4)));
			}, 500)
		);
	};

	return (
		<>
			{/* Job Title Input */}
			<Input
				type="text"
				id="jobTitle"
				label="Desired job title"
				placeholder="Job Title"
				minWidth="100%"
				value={updatedLoggedUser.job_title}
				handleChange={(jobTitle) => getJobSuggestions(jobTitle)}
				error={updatedLoggedUser.errors.job_title}
				icon="suitcase"
			/>
			{/* Jobs Suggestions */}
			<ul
				className="Suggestions EditProfile__suggestions"
				style={{ width: `100%`, top: '5.85rem' }}
			>
				{jobsSuggestions.map((suggestion) => (
					<li
						key={suggestion.uuid}
						onClick={() => {
							updateLoggedField({
								fieldName: 'job_title',
								fieldValue: suggestion.suggestion,
							});
							setJobsSuggestions([]);
						}}
						className="Suggestions__suggestion"
					>
						{suggestion.suggestion}
					</li>
				))}
			</ul>

			{/* Location Input */}
			<Input
				type="text"
				id="city"
				label="Your city"
				placeholder="City name"
				minWidth="100%"
				value={updatedLoggedUser.city}
				handleChange={(city) => getLocationSuggestions(city)}
				error={updatedLoggedUser.errors.city}
				icon="map-marker-alt"
			/>
			{/* Locations Suggestions */}
			<ul
				className="Suggestions EditProfile__suggestions"
				style={{ width: `100%`, top: '5.85rem' }}
			>
				{locationSuggestions.map((suggestion) => (
					<li
						key={suggestion.uuid}
						onClick={() => {
							updateLoggedField({
								fieldName: 'city',
								fieldValue: suggestion.name_1,
							});
							setLocationSuggestions([]);
						}}
						className="Suggestions__suggestion"
					>
						{suggestion.name_1}
					</li>
				))}
			</ul>

			{/* Years of activity */}
			<Input
				type="text"
				id="years_of_activity"
				label="Years of activity"
				placeholder="Career duration"
				minWidth="100%"
				value={`${updatedLoggedUser.years_of_activity}`}
				handleChange={(years) =>
					updateLoggedField({
						fieldName: 'years_of_activity',
						fieldValue: years,
					})
				}
				error={updatedLoggedUser.errors.years_of_activity}
				icon="calendar-alt"
			/>

			{/* Remote Worker */}
			<Checkbox
				label="Keen to work remotely?"
				checked={updatedLoggedUser.remote_worker}
				setChecked={(checked) =>
					updateLoggedField({
						fieldName: 'remote_worker',
						fieldValue: checked,
					})
				}
				textChecked="Available to work from home"
				textUnchecked="Not available to work from home"
			/>

			{/* Higher education */}
			<Checkbox
				label="Higher education?"
				checked={updatedLoggedUser.higher_education}
				setChecked={(checked) =>
					updateLoggedField({
						fieldName: 'higher_education',
						fieldValue: checked,
					})
				}
				textChecked="I do have a higher education"
				textUnchecked="I do not have a higher education"
			/>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(BadgesFields);
import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days={
		[
			{
				resort: "AFC",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Alta",
				date: new Date("1/3/2016"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Snowbird",
				date: new Date("1/5/2016"),
				powder: true,
				backcountry: true
			}
		]
	}/>,
	document.getElementById('react-container')
)

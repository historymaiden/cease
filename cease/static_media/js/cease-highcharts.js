function buildCharts(){
		$(function () {
			Highcharts.setOptions({
			colors: ['#1A1A1A', '#455D78', '#BDCCD4', '#999999', '#B3B3B3', '#F2F2F2'
		]
		});
				$('#heartTimeline').highcharts({
					chart: {
						type: 'area'
					},
					title: {
						text: 'Heart Disease Death Rates in the U.S.from 1980-2010'
					},
					subtitle: {
						text: 'Source: <a href="http://www.mdch.state.mi.us/pha/osr/deaths/Heartdx.asp">'+ 
							'Michigan Department of Community Health</a>'
					},
					xAxis: {
						labels: {
							formatter: function() {
								return this.value; // clean, unformatted number for year
							}
						}
					},
					yAxis: {
						title: {
							text: 'Heart Disease Death Rate Per 100,000 People'
						},
						labels: {
							formatter: function() {
								return this.value / 1 +'k';
							}
						}
					},
					tooltip: {
						pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>deaths in {point.x}'
					},
					plotOptions: {
						area: {
							pointStart: 1980,
							marker: {
								enabled: false,
								symbol: 'circle',
								radius: 2,
								states: {
									hover: {
										enabled: true
									}
								}
							}
						}
					},
					series: [{
						name: 'Heart Disease',
						data: [412.1, 397, 389, 388, 378, 375, 365.1, 355.9, 352.5, 332, 321.8, 313.8, 306.1, 309.9, 299.7, 296.3, 288.3, 280.4, 272.4, 267.8, 257.9, 247.8, 240.8, 232.3, 217, 211.1, 200.2, 190.9, 186.5, 180.1, 178.5]
					}, ]
				});
			});
			
			$(function () {
				$('#kidneyTimeline').highcharts({
					chart: {
						type: 'area'
					},
					title: {
						text: 'Kidney and Renal Pelvis Cancer Related Deaths from 1973-2012'
					},
					subtitle: {
						text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">'+
							'thebulletin.metapress.com</a</a>'
					},
					xAxis: {
						labels: {
							formatter: function() {
								return this.value; // clean, unformatted number for year
							}
						}
					},
					yAxis: {
						title: {
							text: 'Death Rates per 100,000'
						},
						labels: {
							formatter: function() {
								return this.value / .01 +'k';
							}
						}
					},
					tooltip: {
						pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>deaths in {point.x}'
					},
					plotOptions: {
						area: {
							pointStart: 1973,
							marker: {
								enabled: false,
								symbol: 'circle',
								radius: 2,
								states: {
									hover: {
										enabled: true
									}
								}
							}
						}
					},
					series: [{
						name: 'Kidney Cancer Deaths in the U.S.',
						data: [2.9, 3, 3, 3, 3.1, 3.1, 3.1, 3, 3.1, 3.1, 3.2, 3.2, 3.2, 3.3, 3.3, 3.4, 3.3, 3.4, 3.4, 3.5, 3.5,3.4, 3.5, 3.6, 3.5]
					}, ]
				});
			});
		$(function () {
        $('#alzhTimeline').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Alzheimers Death Rates from 1979-2009'
            },
            subtitle: {
                text: 'Source: <a href="http://www.cdc.gov/nchs/data/nvsr/nvsr47/nvs47_20.pdf">'+
                    'National Vital Statistics Report</a>'
            },
            xAxis: {
                labels: {
                    formatter: function() {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Age Adjusted Death Rate By 100,000'
                },
                labels: {
                    formatter: function() {
                        return this.value / .1 +'k';
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>deaths in {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 1979,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Alzheimers Deaths',
                data: [ 0.2, 0.4, 0.5, 0.6, 1, 1.3, 1.6, 1.8, 2, 2.1, 2.1, 2.2, 2.1, 2.1, 2.3, 2.5, 2.7, 2.7, 8.4, 9, 16.5, 18, 19.1, 20.2, 21.4, 21.8, 22.9, 22.6, 22.7, 24.4]
            }, ]
			
        });
    });
    
			
			$(function () {
        $('#heartDemo').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Percentage of All Deaths Caused by Heart Disease in 2008 by Ethnicity'
            },
            subtitle: {
                text: 'Source: <a href="http://www.cdc.gov/heartdisease/facts.htm">'+ 
                    'Center for Disease Control and Prevention (CDC)</a>'
            },
            xAxis: {
                categories: [
                    'White',
                    'African American',
                    'American Indians or Alaska Natives',
                    'Asians or Pacific Islanders',
                    'Hispanics',
					'All'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percent of Deaths (%)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:#455D78;padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Heart Disease by Race and Ethnic Group',
                data: [25.1, 24.5, 18, 23.2, 20.8, 25]
    
            }, ]
        });
    });
			
			$(function () {
				$('#heartStages').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Number of Deaths for Different Types of Heart Diseases in the U.S. for 2008'
					},
					subtitle: {
						text: 'Source: <a href="http://www.nhlbi.nih.gov/resources/docs/2012_ChartBook_508.pdf">'+ 
							'Morbitity & Mortality: 2012 Chart Book on Cardiovascular, Lung and Blood Disease</a>'
					},
					xAxis: {
						categories: [
							'Coronary Heart Disease',
							'Heart Attack',
							'Cardio- myopathy',
							'Stroke',
							'Atrial Fibrillation and Flutter',
							'Heart Failure',
							'Diseases of Pulmonary Circulation',
							'Pulmonary Embolism',
						]
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Diagnostic Category (thousands)'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							pointPadding: 0.2,
							borderWidth: 0
						}
					},
					series: [{
						name: 'Heart Disease Related Deaths for 2008',
						data: [405.309, 133.958, 23.932, 134.148, 15.383, 56.830, 12.927, 7.158]
			
					}]
				});
			});
			
			$(function () {
				$('#kidneyDemo').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Kidney Cancer Death Rates By Race and Ethnicity'
					},
					subtitle: {
						text: 'Source: <a href="http://seer.cancer.gov/statfacts/html/kidrp.html">'+
							'National Cancer Institute</a>'
					},
					xAxis: {
						categories: [
							'All Races',
							'White',
							'African American',
							'Asian/Pacific Islander',
							'American Indian/Alaska Native',
							'Hispanic'
						]
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Percent Per 100,000 people (%)'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							pointPadding: 0.2,
							borderWidth: 0
						}
					},
					series: [{
						name: 'Men',
						data: [5.8, 5.9, 6.0, 2.9, 8.8, 5.0]
			
					}, {
						name: 'Women',
						data: [2.6, 2.7, 2.6, 1.3, 4.1, 2.3]
			
					}]
				});
			});
			
			
			$(function () {
				$('#kidneyStages').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Renal Cancer Stage Distribution and 5-year Relative Survival by Stage at Diagnosis'
					},
					subtitle: {
						text: 'Source: <a href="http://seer.cancer.gov/statfacts/html/kidrp.html">'+
							'National Cancer Institute</a>'
					},
					xAxis: {
						categories: [
							'Localized (confined to primary site)',
							'Regional (spread to regional lymphnodes)',
							'Distant (cancer has metastasized)',
							'Unknown (Unstaged)'
						]
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Percent of People Who Survive in this Stages(%)'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							pointPadding: 0.2,
							borderWidth: 0
						}
					},
					series: [{
						name: 'Stage Distribution',
						data: [62, 17, 17, 4]
			
					}, {
						name: '5-Year Relative Survival Rate',
						data: [91.1, 63.7, 11.6, 34.3]
			
					}]
				});
			});
			
			$(function () {
				$('#alzhDemo').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Percent of People with Alzheimers and Other Dementias by Age Range'
					},
					subtitle: {
						text: 'Source: <a href="http://act.alz.org/site/DocServer/2012_Race_and_Ethnicity_Factsheet.pdf?docID=3761">'+'Alzheimers Association Fact Sheet: February 2013</ahref>'
					},
					xAxis: {
						categories: [
							'White',
							'African American',
							'Hispanic'
						]
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Percent by Race and Ethnicity (%)'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							pointPadding: 0.2,
							borderWidth: 0
						}
					},
					series: [{
						name: '65-74',
						data: [2.9, 9.1, 7.5]
			
					}, {
						name: '75-84',
						data: [10.9, 19.9, 27.9]
			
					}, {
						name: '85+',
						data: [30.2, 58.6, 62.9]
			
					},]
				});
			});
			
			$(function () {
				$('#alzhStages').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Annual Per-Person Payments for Healthcare for Medicare Beneficiaries Age 65+'
					},
					subtitle: {
						text: 'Source: <a href="www.alz.org/downloads/facts_figures_2013.pdf">'+
							'2013 Alzheimers Disease Facts and Figures</a>'
					},
					xAxis: {
						categories: [
							'Inpatient Hospital',
							'Medical Provider',
							'Skilled Nursing Facility',
							'Nursing Home',
							'Hospice',
							'Home Health',
							'Prescription Medications'
						]
					},
					yAxis: {
						min: 0.01,
						title: {
							text: 'Health Care Payment Per Service By $1,000'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} $</b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							pointPadding: 0.2,
							borderWidth: 0
						}
					},
					series: [{
						name: 'People with Alzheimers Disease and Other Dementias',
						data: [10.293, 6.095, 3.955, 18.353, 1.821, 1.460, 2.787]
			
					}, {
						name: 'People without Alzheimers Disease and Other Dementias',
						data: [4.138, 4.041, 0.460, 0.816, 0.178, 0.471, 2.840]
			
					}]
				});
			});
			$(function () {
			Highcharts.setOptions({
			colors: ['#1A1A1A', '#455D78', '#BDCCD4', '#999999', '#B3B3B3', '#F2F2F2'
		]
		});
				$('#pancreaticDeaths').highcharts({
					chart: {
						type: 'area'
					},
					title: {
						text: 'Pancreatic Cancer Deaths in the U.S. from 1980-2009'
					},
					subtitle: {
						text: 'Source: <a href="http://seer.cancer.gov/csr/1975_2009_pops09/browse_csr.php?section=22&page=sect_22_table.06.html">'+ 
							'National Cancer Institute</a>'
					},
					xAxis: {
						labels: {
							formatter: function() {
								return this.value; // clean, unformatted number for year
							}
						}
					},
					yAxis: {
						title: {
							text: 'Death Rate Per 100,000'
						},
						labels: {
							
						}
					},
					tooltip: {
						pointFormat: 'There were <b>{point.y}</b> pancreatic cancer {series.name} per hundred thousand people.'
					},
					plotOptions: {
						area: {
							pointStart: 1980,
							marker: {
								enabled: false,
								symbol: 'circle',
								radius: 2,
								states: {
									hover: {
										enabled: true
									}
								}
							}
						}
					},
		
					series: [{
		name: 'diagnoses',
		data: [11.52, 11.68, 11.72, 12.19, 12.22, 12.1, 11.68, 11.61, 11.65, 11.34, 11.28, 11.4, 11.63, 10.96, 11.38, 11.13, 11.29, 11.49, 11.49, 11.09, 11.4, 11.32, 11.74, 11.6, 11.93, 11.98, 12.48, 12.37, 12.6, 12.76]
		}, {
						name: 'deaths',
						data: [10.62, 10.7, 10.59, 10.69, 10.8, 10.63, 10.6, 10.59, 10.49, 10.62, 10.69, 10.69, 10.7, 10.66, 10.64, 10.45, 10.47, 10.45, 10.52, 10.62, 10.55, 10.56, 10.54, 10.52, 10.68, 10.8, 10.83, 10.81, 10.93, 10.83]
		   }]
				});
			});
			
			  $(function () {
				$('#pancreaticStages').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Pancreatic Cancer Survival Rates by Stage at Diagnosis'
					},
					subtitle: {
						text: 'Source: <a href="http://seer.cancer.gov/csr/1975_2009_pops09/browse_csr.php?section=22&page=sect_22_table.08.html">'+ 
							'National Cancer Institute</a>'
					},
					xAxis: {
						categories: [
							'Localized',
							'Regional',
							'Distant',
							'Unstaged',
						   
						]
					},
					yAxis: {
						min: 0,
						title: {
							text: '5 year survival rate'
						}
				  
					},
					series: [{
						name: 'Males',
						data: [21.6, 8.4, 1.9, 4.6]
		   },{
		name: 'Females',
		data: [24.5, 9.3, 1.7, 3.4]
					}]
				});
			});
		
			  $(function () {
				$('#pancreaticPrevalence').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Pancreatic Cancer Prevalence by Race'
					},
					subtitle: {
						text: 'Source: <a href="http://seer.cancer.gov/csr/1975_2009_pops09/browse_csr.php?section=22&page=sect_22_table.21.html">'+ 
							'National Cancer Institute</a>'
					},
					xAxis: {
						categories: [
							'0 to <5 years since diagnosis',
							'5 to <10 years since diagnosis',
							'10 to <15 years since diagnosis',
		
						   
						]
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Prevalence Counts'
						}
				  
					},
					series: [{
						name: 'All races',
						data: [28875, 4434, 2188]
		   },{
		name: 'White',
		data: [24202, 3764, 1720]
		   },{
		name: 'Black',
		data: [3325, 437, 266]
		   },{
		name: 'Asian/Pacific Islander',
		data: [958, 181, 93]
		   },{
		name: 'Hispanic',
		data: [1807, 257, 190]
					}]
				});
			});
		

}
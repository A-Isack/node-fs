const {get} = require ('https')
const { faker, da } = require('@faker-js/faker');
const { start } = require('repl');

let pdata = [

     {
                    page: 1,
                    per_page: 10,
                    total: 36,
                    total_pages: 3,
                    data: [
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Ashraf`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Ashraf`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Ashraf`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Ashraf`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Ashraf`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Mariam`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Mariam`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Mariam`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Mariam`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                        {
                            id: faker.number.int(),
                            timestamp: faker.date.anytime(),
                            userId: faker.number.int(),
                            userName: faker.person.fullName(),
                            userDob: faker.date.past({years: 20}),
                            vitals: {
                                bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                                bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                                pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                                brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                                bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                                diagnosis: {
                                    id: faker.number.int({min: 1, max: 2}),
                                    name: `${faker.lorem.words(2)}`,
                                    severity: `acute`,
                                },
                                doctor: {
                                    id: faker.number.int(),
                                    name: `Mariam`,  
                                },
                                meta: {
                                    height: `${faker.number.int({min: 140, max: 210})} cm`,
                                    weight: `${faker.number.int({min: 90, max: 200})} p`
                                }
                            }
                        },
                    ],
    
     },
     {
        page: 2,
        per_page: 10,
        total: 36,
        total_pages: 4,
        data: [
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
        ],
    
     },
     {
        page: 3,
        per_page: 10,
        total: 36,
        total_pages: 4,
        data: [
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Ashraf`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
            {
                id: faker.number.int(),
                timestamp: faker.date.anytime(),
                userId: faker.number.int(),
                userName: faker.person.fullName(),
                userDob: faker.date.past({years: 20}),
                vitals: {
                    bloodPressureDiastole: `${faker.number.int({min: 120, max: 180})} mhg`,
                    bloodPressureSystole: `${faker.number.int({min: 60, max: 120})} mhg`,
                    pulse: `${faker.number.int({min: 50, max: 120})} bpm`,
                    brethingRate: `${faker.number.int({min: 10, max: 40})} bpm`,
                    bodyTemperature: `${faker.number.int({min: 90, max: 180})} f`,
                    diagnosis: {
                        id: faker.number.int({min: 1, max: 2}),
                        name: `${faker.lorem.words(2)}`,
                        severity: `acute`,
                    },
                    doctor: {
                        id: faker.number.int(),
                        name: `Mariam`,  
                    },
                    meta: {
                        height: `${faker.number.int({min: 140, max: 210})} cm`,
                        weight: `${faker.number.int({min: 90, max: 200})} p`
                    }
                }
            },
        ],
    
     }
]


async function bodyTemperature(doctorName, diagnosisId) {
    
    
    let pageCount = pdata[0].total_pages
    console.log("Page count || " + pageCount)

    let data = []
    let found = []


    for (let index = 0; index < pageCount; index++) {
        
        let getData = new Promise((resolve, reject)=>{
            resolve(pdata[index])
        })
        data.push(await getData)
        
    }

    console.log(data)

    data.forEach(dataElement=>{

        dataElement.data.forEach(patiendData=>{
            if((patiendData.vitals.doctor.name === doctorName) && (patiendData.vitals.diagnosis.id === diagnosisId)){
                console.log(patiendData)
                found.push(parseInt(patiendData.vitals.bodyTemperature.split(' '[0])))
            }
        })
    })
    

    console.log(found)

    let min = 0
    let max = 0
    found.forEach(temp=>{
        temp > max ? max = temp : ''
        min = max
        temp < min ? min = temp : ''
    })

    console.log([min, max])
}

// bodyTemperature('Ashraf', 1)


async function getdata(){
    
    let getPromise = new Promise((resolve, reject)=>{
        get('https://jsonmock.hackerrank.com/api/medical_record?page=1', (res)=>{
            
            res.on('data', (data=>{
                const parsedData = JSON.parse(data)
                // console.log(parsedData)
                resolve(parsedData)
            }))
        })
    })

    let data = await getPromise
    console.log(data)
    return data
}


// getdata()

function caesarCipher(s, k) {
    // Write your code here
    
   let alphabet = ['a','b', 'c', 'd', 'e' ,'f', 'g','h','i','j'
   ,'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
   ]

function rotate(start , k) {
    let currentIndex = start
    
    for (let index = 0; index < k; index++) {
        currentIndex += 1
        if(currentIndex === alphabet.length){currentIndex = 0}
    }
    console.log(currentIndex)
    return currentIndex 
}
   
   let newString = ""

   let srtArr = s.split('')
//    console.log(srtArr)
   
   let newStr = ""
   for(let i=0 ; i<srtArr.length ; i++){
        let originalChar = srtArr[i]
        

        let found = false
        
        // console.log(originalChar)
        let upperCase = false
        if(originalChar == originalChar.toUpperCase()){upperCase = true}
        
        alphabet.forEach((alphaChar, idx)=>{

            if(alphaChar === originalChar.toLowerCase()){
                console.log(idx)
                    upperCase === true ? 
                    newStr += alphabet[rotate(idx, k)].toUpperCase() 
                    : newStr += alphabet[rotate(idx, k)]              
                found = true
            }
        })
        
        if(found === false){newStr += originalChar}

    }

    // console.log(newStr)
    return newStr
}

// console.log(caesarCipher('www.abc.xy', 4))
// console.log(caesarCipher('middle-Outz', 2))


// console.log("a">"b")


let grid = [ 'eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv' ]


function gridChallenge(grid) {

    let sortedGrid = []

    grid.forEach(g=>{
        
            sortedGrid.push(g.split('').sort())
        })
        
    console.log(sortedGrid)

    let cols = sortedGrid.length
    let rows = sortedGrid[0].length

    console.log(rows + '||' + cols)
    
    let invArr = []
    
    for(let i = 0; i<cols ; i++){
        invArr.push([])
    }
    
    console.log('invArr')
    console.log(invArr)
    
    invArr.forEach((e,i)=>{
        sortedGrid.forEach((el,id)=>{
            invArr[i].push(el[i])
        })
    })

    let sorted = "YES"
    invArr.forEach((e,i)=>{
        if(i+1 < e.length){

            if(e[i] > e[i+1]){ console.log(e[i] +" || "+ e[i+1]);  sorted = "NO"; return}
        }
    })

    console.log(invArr)

    console.log(sorted)

    return sorted

}

gridChallenge(grid)
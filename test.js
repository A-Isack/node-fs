const {get} = require ('https')
const { faker, da } = require('@faker-js/faker');
const { parse } = require('path');

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

bodyTemperature('Ashraf', 1)


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
    console.log(data.error)
    return data
}


// getdata()
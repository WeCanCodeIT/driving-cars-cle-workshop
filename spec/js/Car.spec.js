describe('Car should behave like a car:', function(){
    let underTest; 

    beforeEach( function(){
        underTest = new Car();
    })

    describe('Car should accelerate:', function(){

        describe('when accelerator is pressed', function(){

            it('it should faster by 10 mph', function(){
                underTest.accelerate();
                expect(underTest.getSpeed()).toBe(10);
            })

            it('isSpeeding should return true if speed is greater than 70', function(){
                for(let i=0; i<10; i++){
                    underTest.accelerate();
                }
                expect(underTest.isSpeeding()).toBe(true);
            })

            it('isSpeeding should return false if speed is less than 70', function(){
                underTest.accelerate();
                expect(underTest.isSpeeding()).toBe(false);
            })
        })

    })

    describe('Car should slow down:', function(){

        describe('when brake is pressed', function(){

            it('it should slow down by 7', function(){
                underTest.accelerate();  // Accelerate to 10 mph
                underTest.brake();      // Reduce speed by 7 mph
                expect(underTest.getSpeed()).toBe(3);
            })

            it('car cannot go below speed of 0', function(){
                underTest.brake();
                expect(underTest.getSpeed()).toBe(0);
            })
        })
    })

    describe('Car should have an odometer', function(){

        describe('when speed is greater than 0', function(){

            it('isDriving should return true', function(){
                underTest.accelerate();
                expect(underTest.isDriving()).toBe(true);
            })

            it('addMile should increase distanceTravelled by 1', function(){
                underTest.addMile();
                expect(underTest.getDistanceTravelled()).toBe(1);
            })
        })
    })


})
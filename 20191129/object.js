var car={
    name: 'car1',
    model: 400,
    color: 'black',
    // car라는 객체 안에 company라는 객체 입력
    company: {
        start: 1997,
        logo: 'star'
    },
    // 메소드도 입력
    run: function() {
        alert('Car is running')
    }
};

alert(car.company.start);
car.run();
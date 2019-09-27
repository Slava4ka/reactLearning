import React from 'react';
import {create, act} from 'react-test-renderer';
import ProfileStatusWithHooks from '../../Components/Body/Profile/ProfileStatusWithHooks';

// тут будет набор тестов
describe("ProfileStatus", () => {
    test("status from props should be in the state", () => {
        // что тестим, симулирует создание компоненты
        const component = create(<ProfileStatusWithHooks status="it-kamasutra.com"/>);
        // экземпляр объекта, с которым идет взаимодействие
        const instance = component.root;

        //    console.log(instance._fiber.return.child.pendingProps.status);
        //    console.log(instance._fiber.return.child.memoizedProps.status);

        //проверка на соответсвие ожидаемого с действительным
        expect(instance._fiber.return.child.memoizedProps.status).toBe("it-kamasutra.com")
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatusWithHooks status="it-kamasutra.com"/>);
        const instance = component.root;
        const span = instance.findByType('span');
        // проверяю, есть отрисован ли этот эллемент.
        expect(span).not.toBeNull();
    });

    test("after creation input should't be displayed", () => {
        const component = create(<ProfileStatusWithHooks status="it-kamasutra.com"/>);
        const instance = component.root;
        // ожидаю ошибку, т.к. input не должен отрисовываться
        expect(() => {
            const input = instance.findByType('input')
        }).toThrow();
    });

    test("input should be displayed in edit mode instead span, after click", () => {
        let component;
        // т.к. это hook работать надо через act
        act(() => {
            component = create(<ProfileStatusWithHooks status="it-kamasutra.com"/>)
        });
        const instance = component.root;
        const span = instance.findByType('span');
        act(() => {
            span.props.onDoubleClick();
        });
        const input = instance.findByType('input');
        expect(input.props.value).toBe("it-kamasutra.com");
    });

});
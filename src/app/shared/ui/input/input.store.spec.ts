import { EMPTY_STRING } from '@shared/constants/empty.constant'
import { InputStore } from './input.store'

describe('InputStore', () => {
  let mockInput: HTMLInputElement
  let inputStore: InputStore

  beforeEach(() => {
    mockInput = document.createElement('input')
    mockInput.value = 'test-value'

    inputStore = new InputStore()
  })

  describe('onInput()', () => {
    it('should set value to state', done => {
      const setValueSpy = spyOn(inputStore, 'setValue').and.callThrough()

      inputStore.onInput(mockInput)

      expect(setValueSpy).toHaveBeenCalledOnceWith('test-value')

      inputStore.state$.subscribe(state => {
        expect(state.value).toBe('test-value')
        done()
      })
    })

    it('should call onChange() method for forms API', () => {
      const onChangeSpy = spyOn(inputStore, 'onChange')

      inputStore.onInput(mockInput)

      expect(onChangeSpy).toHaveBeenCalledOnceWith('test-value')
    })
  })

  describe('onClear()', () => {
    it('should set empty string value to state', done => {
      const setValueSpy = spyOn(inputStore, 'setValue').and.callThrough()

      inputStore.onClear(mockInput)

      expect(setValueSpy).toHaveBeenCalledOnceWith(EMPTY_STRING)

      inputStore.state$.subscribe(state => {
        expect(state.value).toBe(EMPTY_STRING)
        done()
      })
    })

    it('should call onChange() method for forms API', () => {
      const onChangeSpy = spyOn(inputStore, 'onChange')

      inputStore.onInput(mockInput)

      expect(onChangeSpy).toHaveBeenCalledOnceWith('test-value')
    })

    it('should focus element after clear', () => {
      const focusSpy = spyOn(mockInput, 'focus')

      inputStore.onClear(mockInput)

      expect(focusSpy).toHaveBeenCalledOnceWith()
    })
  })

  describe('onTouch()', () => {
    it('should call onTouched() method for forms API', () => {
      const onTouchedSpy = spyOn(inputStore, 'onTouched')

      inputStore.onTouch()

      expect(onTouchedSpy).toHaveBeenCalledOnceWith()
    })
  })
})

/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BoxComponent } from './box.component';

describe('Component: Box', () => {
  it('should create an instance', () => {
    let component = new BoxComponent();
    expect(component).toBeTruthy();
  });
});

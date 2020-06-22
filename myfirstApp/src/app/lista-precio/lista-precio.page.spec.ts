import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaPrecioPage } from './lista-precio.page';

describe('ListaPrecioPage', () => {
  let component: ListaPrecioPage;
  let fixture: ComponentFixture<ListaPrecioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPrecioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPrecioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

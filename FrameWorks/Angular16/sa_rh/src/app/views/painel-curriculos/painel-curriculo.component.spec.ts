import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PainelCurriculoComponent } from './painel-curriculo.component';



  let component: PainelCurriculoComponent;
  let fixture: ComponentFixture<PainelCurriculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelCurriculoComponent ],
    });
    fixture = TestBed.createComponent(PainelCurriculoComponent); ;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


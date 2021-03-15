import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoaManutencaoComponent } from './pessoa-manutencao.component';

describe('PessoaManutencaoComponent', () => {
  let component: PessoaManutencaoComponent;
  let fixture: ComponentFixture<PessoaManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PessoaManutencaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

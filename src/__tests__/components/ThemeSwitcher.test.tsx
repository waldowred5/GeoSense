import { ThemeSwitcher } from "../../components/ThemeSwitcher.tsx";
import { render, screen } from "@testing-library/react";

describe('ThemeSwitcher', () => {
  it('should render 2 theme buttons', () => {
    render(<ThemeSwitcher setChartTheme={vi.fn()} />);
    expect(screen.getByTestId('dark-theme-button')).toBeVisible();
    expect(screen.getByTestId('light-theme-button')).toBeVisible();
  });

  it('should call setChartTheme with "synthwave" when dark theme button is clicked', () => {
    const setChartTheme = vi.fn();
    render(<ThemeSwitcher setChartTheme={setChartTheme} />);
    screen.getByTestId('dark-theme-button').click();
    expect(setChartTheme).toHaveBeenCalledWith('synthwave');
  });

  it('should call setChartTheme with "light" when light theme button is clicked', () => {
    const setChartTheme = vi.fn();
    render(<ThemeSwitcher setChartTheme={setChartTheme} />);
    screen.getByTestId('light-theme-button').click();
    expect(setChartTheme).toHaveBeenCalledWith('light');
  });
});

import React from "react";
import { mount, shallow } from "enzyme";
import AppDrawerNavItem from "../AppDrawerNavItem";
import Button from "@material-ui/core/Button";

describe("AppDrawerNavItem renders depth 0", () => {
  let props;
  let mountedDrawerNav;
  const appDrawerNavItem0 = () => {
    if (!mountedDrawerNav) {
      mountedDrawerNav = mount(
        <AppDrawerNavItem {...props} />
      );
    }
    return mountedDrawerNav;
  }

  beforeEach(() => {
    props = {
      depth: 0,
      title: "a",
    };
    mountedDrawerNav = undefined;
  });
  
  // All tests will go here
  it("always rendered a ListItem", () => {
    const listItem = appDrawerNavItem0().find("ListItem");
    expect(listItem.length).toBeGreaterThan(0);
  });

});

describe("AppDrawerNavItem renders depth 1 - red", () => {
  let props;
  let mountedDrawerNav;
  const appDrawerNavItem1 = () => {
    if (!mountedDrawerNav) {
      mountedDrawerNav = mount(
        <AppDrawerNavItem {...props} />
      );
    }
    return mountedDrawerNav;
  }

  beforeEach(() => {
    props = {
      depth: 1,
      title: "a",
      isActiveNotif: 1,
    };
    mountedDrawerNav = undefined;
  });
  
  // All tests will go here
  it("always rendered a ListItem", () => {
    const listItem = appDrawerNavItem1().find("ListItem");
    expect(listItem.length).toBeGreaterThan(0);
  });

  it("always rendered a Button", () => {
    const button = appDrawerNavItem1().find("ListItem").find("Button");
    expect(button.length).toBeGreaterThan(0);
  });

  it("always rendered a Div", () => {
    const div = appDrawerNavItem1().find("ListItem").find("Button").find("div");
    expect(div.length).toBeGreaterThan(0);
  });

  it("always rendered a Div in div", () => {
    const div2 = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div");
    expect(div2.length).toBeGreaterThan(0);
  });

  it("always rendered a svg", () => {
    const svg = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div").find("svg");
    expect(svg.length).toBeGreaterThan(0);
  });

  it("always rendered a text", () => {
    const text = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div").find("svg").find("text");
    expect(text.length).toBeGreaterThan(0);
  });

  it("color of text", () => {
    const svg = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div").find("svg").find("text");
    expect(svg.props().fill).toBe("red");
  });

  it("always rendered a Menu", () => {
    const menu = appDrawerNavItem1().find("ListItem").find("Menu");
    expect(menu.length).toBeGreaterThan(0);
  });
});

describe("AppDrawerNavItem renders depth 1 - grey", () => {
  let props;
  let mountedDrawerNav;
  const appDrawerNavItem1 = () => {
    if (!mountedDrawerNav) {
      mountedDrawerNav = mount(
        <AppDrawerNavItem {...props} />
      );
    }
    return mountedDrawerNav;
  }

  beforeEach(() => {
    props = {
      depth: 1,
      title: "a",
      isActiveNotif: 0,
    };
    mountedDrawerNav = undefined;
  });
  
  // All tests will go here
  it("always rendered a ListItem", () => {
    const listItem = appDrawerNavItem1().find("ListItem");
    expect(listItem.length).toBeGreaterThan(0);
  });

  it("always rendered a Button", () => {
    const button = appDrawerNavItem1().find("ListItem").find("Button");
    expect(button.length).toBeGreaterThan(0);
  });

  it("always rendered a Div", () => {
    const div = appDrawerNavItem1().find("ListItem").find("Button").find("div");
    expect(div.length).toBeGreaterThan(0);
  });

  it("always rendered a Div in div", () => {
    const div2 = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div");
    expect(div2.length).toBeGreaterThan(0);
  });

  it("always rendered a svg", () => {
    const svg = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div").find("svg");
    expect(svg.length).toBeGreaterThan(0);
  });

  it("always rendered a text", () => {
    const text = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div").find("svg").find("text");
    expect(text.length).toBeGreaterThan(0);
  });

  it("color of text", () => {
    const svg = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div").find("svg").find("text");
    expect(svg.props().fill).toBe("gray");
  });

  it("always rendered a Menu", () => {
    const menu = appDrawerNavItem1().find("ListItem").find("Menu");
    expect(menu.length).toBeGreaterThan(0);
  });
});


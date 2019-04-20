var async=require("../lib/async"),expect=require("chai").expect;describe("compose",function(){context("all functions succeed",function(){it("yields the result of the composition of the functions",function(t){var n=function(t,n){setTimeout(function(){n(null,t+2)})},e=function(t,n){setTimeout(function(){n(null,3*t)})},o=function(t,n){setTimeout(function(){n(null,t+1)})};async.compose(o,e,n)(3,function(n,e){expect(n).to.not.exist,expect(e).to.eql(16),t()})})}),context("a function errors",function(){it("yields the error and does not call later functions",function(t){var n=!1,e=new Error("mul3 error"),o=function(t,n){setTimeout(function(){n(null,t+2)})},c=function(t,n){setTimeout(function(){n(e)})},i=function(t,e){n=!0,setTimeout(function(){e(null,t+1)})};async.compose(i,c,o)(3,function(o,c){expect(o).to.eql(e),expect(c).to.not.exist,expect(n).to.be.false,t()})})}),it("calls each function with the binding of the composed function",function(t){var n={},e=null,o=null,c=function(t,n){e=this,setTimeout(function(){n(null,t+2)})},i=function(t,n){o=this,setTimeout(function(){n(null,3*t)})};async.compose(i,c).call(n,3,function(c,i){expect(c).to.not.exist,expect(i).to.eql(15),expect(e).to.equal(n),expect(o).to.equal(n),t()})})});